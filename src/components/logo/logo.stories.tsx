import type { Meta, StoryObj } from '@storybook/react';
import type { LogoProps } from './logo';
import { Logo } from './logo';

export default {
  component: Logo,
  title: 'Brand/Logo',
  parameters: {
    layout: 'center',
  },
  decorators: [
    (Story) => (
      <div className="w-full h-dvh flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Logo>;

type StoryArgs = { width: string; height: string } & LogoProps;
type Story = StoryObj<StoryArgs>;

const render = ({ width, height, ...args }: StoryArgs) => (
  <div className={`w-[${width}] h[${height}]`}>
    <Logo {...args} />
  </div>
);

export const Default: Story = {
  args: { height: '200px', width: '200px' },
  render,
};
