import type { Product } from "../Interfaces/ProductInterface";

export class Cart{
    orderLines: { product: Product, amount: number }[];

    constructor() {
        this.orderLines = [];
    }

    add(product: Product, amount: number): void {
        this.orderLines.push({product,amount})
    }


    calculateAmountByProduct( product: Product):number{
        let totalAmount =  0;
        this.orderLines.forEach(line => {
            if(line.product.name == product.name){
                totalAmount +=line.product.getPrice(line.amount);
            }
        });
        return totalAmount;
    }

    calculateAmount():number{
        let totalAmount =  0;
        this.orderLines.forEach(line => {
            totalAmount +=line.product.getPrice(line.amount);
        });
        return totalAmount;
    }

    displayDetails():string{
        let details = "";

        this.orderLines.forEach(line => {
            let amountByProduct = line.product.getPrice(line.amount);
            details += "id: "+line.product.id + " ,Nom du produit: "+line.product.name+", Prix unitaire: "+line.product.price+", Unité de mesure: "+line.product.unit+", Quantité sélectionnée: "+line.amount+", Montant produit.s :"+amountByProduct+ "\n";
        });

        return details;
    }

    getProductTypesCount(): number {
        const uniqueProductIds = new Set(this.orderLines.map(orderLine => orderLine.product.name));
        return uniqueProductIds.size;
    }
}