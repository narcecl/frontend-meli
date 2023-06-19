import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Breadcrumb> = {
    title: 'Core/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    argTypes: {
        items: {
            description: 'Array of navigation items.'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        items: ['Elemento 1', 'Elemento 2', 'Elemento 3']
    },
};