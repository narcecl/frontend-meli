import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from './ChevronRight';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChevronRight> = {
    title: 'Core/ChevronRight',
    component: ChevronRight,
    tags: ['autodocs'],
    argTypes: {
    }
};

export default meta;
type Story = StoryObj<typeof ChevronRight>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
    },
};