import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from '@/components/';
import type { ErrorPageProps } from '@/components/';
import { Typography } from '@/components/typography';

export default {
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/ErrorPage',
} as Meta<typeof ErrorPage>;

type StoryArgs = ErrorPageProps & { smallPrint: string };
type Story = StoryObj<StoryArgs>;

export const FourOhOh: Story = {
  args: {
    status: 400,
    message: 'This is some more info about the 400 bad request',
    smallPrint: 'Even more info',
  },
  render: (args) => (
    <ErrorPage {...args}>
      <Typography>{args.smallPrint}</Typography>
    </ErrorPage>
  ),
};

export const FourOhFour: Story = {
  args: {
    status: 404,
  },
  render: (args) => <ErrorPage {...args} />,
};

export const Forbidden: Story = {
  args: {
    status: 403,
    message: 'The admin role is required to access this page',
  },
  render: (args) => <ErrorPage {...args} />,
};

export const Unauthorised: Story = {
  args: {
    status: 401,
  },
  render: (args) => <ErrorPage {...args} />,
};

export const ServerError: Story = {
  args: {
    status: 500,
    detail: `Unhandled exception occurred on line 123. Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Iusto molestiae laudantium quos fugit sunt rem 
    repudiandae obcaecati consectetur quam sequi quibusdam quisquam voluptates 
    non dolorum quas molestias, maxime quis eos.`,
    message: 'There was some kind of error',
  },
  render: (args) => <ErrorPage {...args} />,
};
