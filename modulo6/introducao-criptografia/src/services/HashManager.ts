import * as bcrypt from "bcryptjs"

export class HashManager {

    generateHash = async (plain: string): Promise<string> => {
        const rounds:number =  Number(process.env.BCRYPT_COST)
        const salt:string = await bcrypt.genSalt(rounds)
        const hash:string = await bcrypt.hash(plain, salt)
        return hash
    }

    compareHash = async (plain: string, hash: string): Promise<boolean>=> {
        const result = await bcrypt.compare(plain,hash )
        return result
    }
}