import type { FunctionComponent, ReactNode, SVGProps } from 'react';
import { Logo } from '@/components/logo';
import { Typography } from '@/components/typography';

export type ErrorPageLayoutProps = {
  children?: ReactNode;

  /**
   * Error icon
   */
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * Error message text
   */
  message?: string;

  /**
   * Error message subtext
   */
  tagline?: string;

  /**
   * Page title text
   */
  title: string;
};

export function ErrorPageLayout({ Icon, children, message, tagline = 'Oops!', title }: ErrorPageLayoutProps) {
  return (
    <div className="h-dvh relative">
      <div className="h-[100px] absolute left-4 top-3">
        <Logo />
      </div>

      <div className="flex flex-col justify-center min-h-dvh text-center">
        <div className="flex items-end justify-center mb-8 gap-4">
          {Icon && (
            <div>
              <Icon width={144} height={144} />
            </div>
          )}

          <Typography variant="h2" component="span" className="font-light pb-7">
            {tagline}
          </Typography>
        </div>

        <div className="flex flex-col gap-6 px-10 items-center">
          <Typography variant="h3" component="h1" className="font-light">
            {title}
          </Typography>

          {message && (
            <Typography variant="h5" component="p">
              {message}
            </Typography>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
