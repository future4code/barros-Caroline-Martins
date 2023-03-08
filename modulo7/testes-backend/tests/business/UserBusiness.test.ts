import { UserBusiness } from "../../src/business/UserBusiness"
import { CustomError } from "../../src/error/CustomError"
import { USER_ROLES } from "../../src/model/User"
import { HashGeneratorMock } from "../mocks/IHashGeneratorMock"
import { IdGeneratorMock } from "../mocks/IIdGeneratorMock"
import { TokenGeneratorMock } from "../mocks/ITokenGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashGeneratorMock(),
    new IdGeneratorMock(),
    new TokenGeneratorMock()
)



describe("Testes Signup", () => {
    test("teste erro 1: erro name vazio", async () => {
        expect.assertions
        try {
            await userBusiness.signup(
                "Astrodev",
                "astrodev@gmail.com",
                "123456",
                USER_ROLES.ADMIN)

        } catch (error: any) {
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Missing input")
        }
    })

    test("teste erro 2: erro email invalido", async () => {
        expect.assertions
        try {
            await userBusiness.signup("mockinho", "email", "123456", USER_ROLES.NORMAL)

        } catch (error: any) {
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Invalid email")
        }
    })

    test("teste erro 3: erro senha invalido", async () => {
        expect.assertions
        try {
            await userBusiness.signup("mockinho", "email@email.com", "123", USER_ROLES.NORMAL)

        } catch (error: any) {
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Invalid password")
        }
    })

    test("teste erro 4: erro tipo user invalido", async () => {
        expect.assertions
        try {
            await userBusiness.signup("mockinho", "email@email.com", "123456", "")

        } catch (error: any) {
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Missing input")
        }
    })

    test("teste erro 5: SUCESSO cadastro e token verificação", async () => {
        const result = await userBusiness.signup("mockinho", "email@email.com", "123456", USER_ROLES.NORMAL)

        expect(result).toBeDefined()
        expect(result).toEqual({ accessToken: "token" })
    })
})
