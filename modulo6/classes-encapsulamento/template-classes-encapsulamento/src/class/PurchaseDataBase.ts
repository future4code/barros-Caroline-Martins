import { Knex } from "knex";
import { TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "./Purchase";


export class PurchaseDataBase{
    constructor(private connection:Knex){
        this.connection = connection;
    }

    public insertPurchase = async(newPurchase:Purchase)=>{
        await this.connection(TABLE_PURCHASES).insert(newPurchase)
    }
}