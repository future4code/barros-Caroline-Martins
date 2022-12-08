import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const product = new ProductDatabase()

       const result = await product.insertProduct(
            Date.now().toString(),
            name,
            price
        )

        res.status(201).send( `message: "Produto criado", product: ${result} `)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
