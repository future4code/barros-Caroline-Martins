import { performPurchase } from "../src/funcs/performPurchase"
import { User } from "../src/models/User"

describe("Teste User 1", () => {

    test("Verificar Balance maior que Value", () => {
        const user: User = {
            name: "Carol",
            balance: 200
        }

        const resultSaldo = performPurchase(user, 100)

        expect(resultSaldo).toEqual({ name: "Carol", balance: 100 })
    })



})
describe("Teste User 2", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})

describe("Teste User 3", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).not.toBeDefined()
    })
})