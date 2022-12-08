import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabse extends BaseDatabase{
    public static TABLE_PRODUCTS = "Labe_Products"

    public async getAllProducts(){
        const resultProducts = await BaseDatabase.connection(ProductDatabse.TABLE_PRODUCTS).select()
        console.log(resultProducts);
        
        return resultProducts 
     }


}