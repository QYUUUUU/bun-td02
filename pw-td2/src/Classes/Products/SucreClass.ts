import type { Product } from "../../Interfaces/ProductInterface";
import { v4 as uuidv4 } from 'uuid';

export class Sucre implements Product{
    id:string;
    price: number;
    name: string;
    unit: string;
    
    constructor(){
        this.price = Math.floor(Math.random() * 6);
        this.id = uuidv4();
        this.name = "Sucre";
        this.unit = "kg";
    }

    getPrice(amount: number):number{
        return this.price*amount;
    }
    
}