export interface Product{
    id: string,
    price: number;
    name: string;
    unit: string;
    getPrice: (amount: number)=>number;
}