import type { Product } from "../../Interfaces/ProductInterface";
import { v4 as uuidv4 } from 'uuid';  // Importer la version 4 d'UUID

export class Citron implements Product{
    id:string;
    price: number;
    name: string;
    unit: string;

    constructor(price: number){
        this.id = uuidv4();
        this.price = price;
        this.name = 'Citron';
        this.unit = 'unité';
    }

    getPrice(amount: number):number{
        return this.price*amount;
    }
}