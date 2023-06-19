import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Search> = {
    title: 'Core/Search',
    component: Search,
    tags: ['autodocs'],
    argTypes: {
        value: {
            description: 'Defines input state (Getter).',
        },
        placeholder: {
            description: 'Defines input native placeholder attribute',
        },
        onInput: {
            description: 'Defines onInput event on input',
            control: false,
        }
    }
};

export default meta;
type Story = StoryObj<typeof Search>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    parameters: {
        backgrounds: { default: 'primary' },
    },
    args: {
    },
};