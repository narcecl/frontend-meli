import type { Meta, StoryObj } from '@storybook/react';
import { ProductItem } from './ProductItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductItem> = {
    title: 'Core/ProductItem',
    component: ProductItem,
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'Defines Mercado Libre product ID.',
        },
        title: {
            description: 'Defines product title.'
        },
        price: {
            description: 'Product price information.'
        },
        picture: {
            description: 'Defines product thumbnail image.'
        },
        condition: {
            description: 'Defines product condition.'
        },
        free_shipping: {
            description: 'Defines if product has free shipping option.'
        },
        address: {
            description: 'Defines product address.'
        }
    }
};

export default meta;
type Story = StoryObj<typeof ProductItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        id: 'MLA1149502467',
        title: 'Figura De Acción  Tanjiro Kamado 49010 De Funko Pop! Animation',
        price: { currency: 'ARS', amount: 3399, decimals: 0 },
        picture: 'http://http2.mlstatic.com/D_744432-MLA52222036808_102022-I.jpg',
        condition: 'Nuevo',
        free_shipping: false,
        address: 'Capital Federal'
    },
};