import { Request, Response } from "express"
import { PurchaseDatabase } from "../database/PurchaseDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDB = new PurchaseDatabase()

        const result = await purchaseDB.getUserPuchese(id)

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}