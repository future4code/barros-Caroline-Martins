import { Request, Response } from "express"
import { ProductDatabse } from "../database/ProductDatabase"


export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const products = new ProductDatabse()

        const result = await products.getAllProducts()
        
        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}