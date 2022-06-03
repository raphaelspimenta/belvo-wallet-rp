
export const formatNumber = (number: number): string =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
