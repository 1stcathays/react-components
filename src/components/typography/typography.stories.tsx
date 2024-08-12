import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { Alert } from '@/components/alert';
import type { TypographyProps } from '@/components/typography';
import { Typography } from '@/components/typography';

export default {
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Brand/Typography',
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Alert>;

type StoryArgs = ComponentProps<typeof Typography>;
type Story = StoryObj<StoryArgs>;

const render = (args: StoryArgs) => <Typography {...args} />;

const children =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident iste inventore enim asperiores ex rerum, debitis aperiam iusto, impedit, laborum aut. Saepe iusto fugit minima! Eligendi minus facilis magnam.';

const options: TypographyProps['variant'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

export const Overview: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      {options.map((variant) => (
        <Typography key={variant} variant={variant} component={variant}>
          {variant}: {children.split('.')[0]}
        </Typography>
      ))}
    </div>
  ),
};

export const Span: Story = {
  args: {
    component: 'span',
    variant: 'span',
    children,
  },
  render,
};

export const Paragraph: Story = {
  args: {
    component: 'p',
    variant: 'p',
    children,
  },
  render,
};

export const H1: Story = {
  args: {
    component: 'h1',
    variant: 'h1',
    children,
  },
  render,
};

export const H2: Story = {
  args: {
    component: 'h2',
    variant: 'h2',
    children,
  },
  render,
};

export const H3: Story = {
  args: {
    component: 'h3',
    variant: 'h3',
    children,
  },
  render,
};

export const H4: Story = {
  args: {
    component: 'h4',
    variant: 'h4',
    children,
  },
  render,
};

export const H5: Story = {
  args: {
    component: 'h5',
    variant: 'h5',
    children,
  },
  render,
};

export const H6: Story = {
  args: {
    component: 'h6',
    variant: 'h6',
    children,
  },
  render,
};
