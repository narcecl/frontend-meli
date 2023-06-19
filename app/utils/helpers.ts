export function checkCondition(condition: string): string {
    // Return translated product condition
    const fallbackCondition = 'Estado sin especificar';
    if( !condition ) return fallbackCondition;

    let availableConditions = [
        { condition: 'new', label: 'Nuevo' },
        { condition: 'used', label: 'Usado' },
        { condition: 'refurbished', label: 'Reacondicionado' },
        { condition: 'not_specified', label: 'Estado sin especificar' },
    ];

    let foundCondition = availableConditions.find(item => item.condition === condition);
    if( foundCondition ) return foundCondition.label;
    return fallbackCondition;
}

export function formatCurrency(number: number): string {
    // Format number to a currency
    const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    return formatter.format(number);
}

export function getDecimals(price: number): number{
    // Get decimals from a number
    return +price.toString().split('.')[1] || 0;
};