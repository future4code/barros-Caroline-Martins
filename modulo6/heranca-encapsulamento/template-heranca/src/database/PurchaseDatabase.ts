import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase{
    public static TABLE_PURCHASES = "Labe_Purchases"

    public insertPurchases =async (purchase: Purchase) => {
        await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        })   
    }
}