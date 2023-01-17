export class Purchase{
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number

    constructor(id: string, userId: string, productId: string, quantity: number, totalPrice: number){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    
}