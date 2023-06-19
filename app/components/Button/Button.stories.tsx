import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: 'Core/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: {
            description: 'Defines button text content.',
            control: 'text',
        },
        type: {
            description: 'Defines button style theme.',
            control: 'select',
        },
        full: {
            description: 'Defines if button get full width (of container).',
            control: 'boolean',
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
       label: 'Button',
       type: 'primary',
       full: false
    },
};