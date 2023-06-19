export interface PriceProps {
    currency: string;
    amount: number;
    decimals: number;
}

export interface ProductItemProps{
    id: string;
    title: string;
    price: PriceProps;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;
}

export interface ProductDetailsProps extends ProductItemProps{
    sold_quantity: number;
    description: string;
}