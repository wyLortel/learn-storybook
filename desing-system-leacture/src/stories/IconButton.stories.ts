import type { Meta, StoryObj } from '@storybook/react-vite';
import '../css/index.css';
import '@fontsource/noto-sans-kr/400.css'; // Specify weight
import '@fontsource/noto-sans-kr/700.css';

import IconButton from '../components/IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    alt: { control: 'text', description: '아이콘 버튼의 대체 텍스트' },
    iconPath: { control: 'text', description: '아이콘 버튼의 이미지 경로' },
    onClick: {
      action: 'clicked',
      description: '아이콘 버튼 클릭 시 호출되는 함수',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Icon Button',
    iconPath: '/vite.svg',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
