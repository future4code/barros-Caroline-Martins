import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    public static TABLE_PRODUCTS = "Labe_Products"

    public async getAllProducts(){
        const resultProducts = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()
        
        return resultProducts 
     }

    public insertProduct = async (id: string, name: string,price: number) => {
        const newProduct = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert({
            id,
            name,
            price
          })
          return newProduct
    }
    //  public insertProduct = async (product = Product) => {

    //     await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert({
    //         id: product.getId(),
    //         name: product.getName(),
    //         price: product.getPrice()
    //     })
    
    //   }

}