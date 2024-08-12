import type { Meta, StoryObj } from '@storybook/react';
import { CameraIcon } from 'lucide-react';
import type { ErrorPageLayoutProps } from '@/components/error-page/error-page-layout';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';
import { Typography } from '@/components/typography';

export default {
  argTypes: {
    Icon: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    smallPrint: {
      control: {
        type: 'text',
      },
      defaultValue: "This is the small print. Don't navigate away until you have read this!",
    },
  },
  component: ErrorPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/ErrorPage',
} as Meta<typeof ErrorPageLayout>;

type StoryArgs = ErrorPageLayoutProps & { smallPrint: string };
type Story = StoryObj<StoryArgs>;

export const Custom: Story = {
  args: {
    Icon: CameraIcon,
    message: 'Provide a title, message and an icon to create your own page',
    tagline: 'Yoi!',
    title: '#boom - A custom error page',
  },
  render: (args) => (
    <ErrorPageLayout {...args}>
      <Typography>{args.smallPrint}</Typography>
    </ErrorPageLayout>
  ),
};
