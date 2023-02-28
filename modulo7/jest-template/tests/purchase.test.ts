import { performPurchase } from "../src/funcs/performPurchase"
import { User } from "../src/models/User"

describe("Teste User", () => {

    test("Verificar Balance!", () => {
        const user: User = {
            name: "Carol",
            balance: 200
        }

        const resultSaldo = performPurchase(user, 100)

        expect(resultSaldo).toEqual({ name: "Carol", balance: 100 })
    })
})