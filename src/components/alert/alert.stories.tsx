import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/alert';

const variants: StoryArgs['variant'][] = ['info', 'success', 'destructive', 'warning'];

export default {
  component: Alert,
  argTypes: {
    message: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/Alert',
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Alert>;

type StoryArgs = ComponentProps<typeof Alert> & { title?: string; message?: string };
type Story = StoryObj<StoryArgs>;

const render = ({ title, message, ...args }: StoryArgs) => (
  <Alert {...args}>
    <>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message && <AlertDescription>{message}</AlertDescription>}
    </>
  </Alert>
);

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'This is an info alert',
    message: 'This is some extra detail',
  },
  render,
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'This is a success alert',
  },
  render,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'This is a warning alert',
  },
  render,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'This is a destructive alert',
  },
  render,
};
