import type { Meta, StoryObj } from '@storybook/react-vite';
import '../css/index.css';
import '@fontsource/noto-sans-kr/400.css'; // Specify weight
import '@fontsource/noto-sans-kr/700.css';

import ErrorMessage from '../components/ErrorMessage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text', description: '라벨의 내용' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ErrorMessage Text',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
