import { ProductConditionsProps, ProductItemProps, ProductDetailsProps } from '@/app/types/ProductItem.types';
import { CategoryProps } from '@/app/types/Category.types';

const API_PRODUCT_URL = 'https://api.mercadolibre.com/sites/MLA';
const API_ITEM_URL = 'https://api.mercadolibre.com/items';
const API_CATEGORY_URL = 'https://api.mercadolibre.com/categories/';

export async function getProducts(query: string): Promise<any> {
    return await fetch(`${API_PRODUCT_URL}/search?q=${query}&limit=4`)
    .then(res => {
        if( res.status !== 200 ) return false;
        return res.json();
    })
    .then(data => data);
}

export async function getCategoryInfo(categoryId: string): Promise<any> {
    return await await fetch(`${API_CATEGORY_URL}/${categoryId}`)
    .then(res => {
        if( res.status !== 200 ) return false;
        return res.json();
    })
    .then(data => data);
}

export async function getProductInfo(ID: string): Promise<any> {
    return await fetch(`${API_ITEM_URL}/${ID}`)
    .then(res => {
        if( res.status !== 200 ) return false;
        return res.json();
    })
    .then(data => data);
}

export async function getProductDescription (ID: string): Promise<any> {
    return await fetch(`${API_ITEM_URL}/${ID}/description`)
    .then(res => {
        if( res.status !== 200 ) return false;
        return res.json();
    })
    .then(data => data);
}

export function checkCondition(condition: string): string {
    // Return translated product condition
    if( !condition ) return '';

    let availableConditions: ProductConditionsProps[] = [
        { condition: 'new', label: 'Nuevo' },
        { condition: 'used', label: 'Usado' },
        { condition: 'refurbished', label: 'Reacondicionado' },
        { condition: 'not_specified', label: 'Estado sin especificar' },
    ];

    let foundCondition = availableConditions.find(item => item.condition === condition);
    if( foundCondition ) return foundCondition.label;
    return 'Estado sin especificar';
}

export function formatCurrency(number: number): string {
    // Format number to currency (CLP)
    const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    return formatter.format(number);
}

export function getDecimals(price: number): number{
    // Get decimals from a number
    return +price.toString().split('.')[1] || 0;
};

export function getFormattedProductSearch(product: any): ProductItemProps {
    // Format product object (result) into required format
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.thumbnail,
        condition: checkCondition(product.condition),
        free_shipping: product.shipping.free_shipping,
        address: product?.address?.state_name,
    };
};

export function getFormattedProductView(product: any, description: string = ''): ProductDetailsProps {
    // Format product object into required format
    return {
        ...getFormattedProductSearch(product),
        picture: product.pictures[0]?.url || product.thumbnail,
        sold_quantity: product.sold_quantity,
        description: description,
    };
};

export function getCategoryIdByFilters(filters: CategoryProps[]): string {
    // Get the filters and return the category ID with most results 
    const categories = filters.find(filter => filter.id === 'category');
    if( !categories ) return '';

    const { values } = categories;
    const sortedCategories = values.reduce((max, current) => current.results > max.results ? current : max);
    return sortedCategories.id;
};

export function getCategoriesFromFilters(filters: any): string[] {
    // Return array with only the name's category
    const { path_from_root } = filters;
    return path_from_root.map((category: any) => category.name);
}

export async function getCategoriesFromAvailableFilters(availableFilters: any): Promise<string[]> {
    // Get the available filters and get the the category with most results
    let categoryId = getCategoryIdByFilters(availableFilters);
    let response = await getCategoryInfo(categoryId);
    let categories = getCategoriesFromFilters(response);
    return categories;
}

export async function getBreadcrumb(filters: any, available_filters: any): Promise<string[]> {
    // Return array of categories for breadcrumb, based on filters or available filters
    return filters.length ?
        getCategoriesFromFilters(filters[0].values[0]) :
        await getCategoriesFromAvailableFilters(available_filters);
}

export async function getBreadcrumbByCategory(categoryId: string): Promise<string[]> {
    // Return array of categories for breadcrumb, based on the single product category
    let response = await getCategoryInfo(categoryId);
    let categories = getCategoriesFromFilters(response);
    return categories;
}
