import type { Product } from "../../Interfaces/ProductInterface";
import { v4 as uuidv4 } from 'uuid';

export class HuileOlive implements Product{
    id:string;
    price: number;
    name: string;
    unit: string;

    constructor(price: number){
        this.price = price;
        this.id = uuidv4();
        this.name = "Huile d'Olive";
        this.unit = "litre";
    }

    getPrice(amount: number):number{
        return this.price*amount;
    }
    
}