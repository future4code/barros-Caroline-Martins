import { Request, Response } from "express"
import { Product } from "../class/Product"
import { ProductDataBase } from "../class/ProductDataBase"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }
        const productDB = new ProductDataBase(connection)

        const findProduct = await productDB.getProductId(userId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }
        const product = new Product(findProduct[0].id, findProduct[0].name, findProduct[0].price)

        const newPurchase: Purchase = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice: product.getPrice() * quantity
        }

        await connection(TABLE_PURCHASES).insert({
            id: newPurchase.id,
            user_id: newPurchase.userId,
            product_id: newPurchase.productId,
            quantity: newPurchase.quantity,
            total_price: newPurchase.totalPrice
        })

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}