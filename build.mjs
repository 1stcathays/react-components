import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { build } from 'esbuild';
import { glob } from 'glob';

const __dirname = dirname(fileURLToPath(import.meta.url));

function success(text) {
  return `👍🏽${text}`;
}

function error(text) {
  return ` ❌ ${text}`;
}

glob('src/**/index.ts')
  .then((entryPoints) => {
    console.log(
      `\n 🏭 ${chalk.blueBright()}Building modules:\n${chalk.grey(
        entryPoints
          .map((e) => (e === 'src/index.ts' ? 'root' : e.replace(/^src\/(.*)\/index\.ts/, '$1')))
          .map((e) => `   ${e}`)
          .join('\n'),
      )}`,
    );

    return build({
      allowOverwrite: true,
      bundle: true,
      entryPoints,
      format: 'esm',
      outdir: 'dist',
      packages: 'external',
      platform: 'node',
      sourcemap: true,
    });
  })
  .then((esmResult) => {
    if (esmResult.errors.length === 0) {
      console.log(success('ESM modules built'));
    }

    return readFile(resolve(__dirname, './package.json'), 'utf8');
  })
  .then((text) => {
    const pkgJson = JSON.parse(text);
    const deployJson = {};
    const copyFields = [
      'name',
      'keywords',
      'dependencies',
      'optionalDependencies',
      'peerDependencies',
      'publishConfig',
      'repository',
      'type',
    ];

    copyFields.forEach((field) => {
      if (pkgJson[field]) deployJson[field] = pkgJson[field];
    });

    return writeFile(
      resolve(__dirname, 'dist', 'package.json'),
      JSON.stringify(
        {
          ...deployJson,
          main: './index.js',
          sideEffects: false,
          types: './index.d.ts',
        },
        null,
        2,
      ) + '\n',
      'utf8',
    );
  })
  .then(() => {
    console.log(success('package.json written to /dist'));
  })
  .catch((err) => {
    console.log(error('Failed to build modules for publishing'));
    console.err(err);
  });
