import { CustomError } from "../error/CustomError";
import { stringToUserRole, User } from "../model/User";
import { IHashGenerator, IIdGenerator, ITokenGenerator } from "./posts";
import { UserResository } from "./UserRepository";

export class UserBusiness {

    constructor(
        private userDatabase: UserResository,
        private hashGenerator: IHashGenerator,
        private idGenerator: IIdGenerator,
        private tokenGenerator: ITokenGenerator
    ) { }

    public async signup(
        name: string,
        email: string,
        password: string,
        role: string
    ) {
        try {
            if (!name || !email || !password || !role) {
                throw new CustomError(422, "Missing input");
            }

            if (email.indexOf("@") === -1) {
                throw new CustomError(422, "Invalid email");
            }

            if (password.length < 6) {
                throw new CustomError(422, "Invalid password");
            }

            const id = this.idGenerator.generate();

            const cypherPassword = await this.hashGenerator.hash(password);

            await this.userDatabase.createUser(
                new User(id, name, email, cypherPassword, stringToUserRole(role))
            );

            const accessToken = this.tokenGenerator.generate({
                id,
                role,
            });
            return { accessToken };
        } catch (error: any) {
            if (error.message.includes("key 'email'")) {
                throw new CustomError(409, "Email already in use")
            }

            throw new CustomError(error.statusCode, error.message)
        }

    }

    public async allById(id: string) {
        try {
            const user = await this.userDatabase.getUserById(id)
            if (!user) {
                throw new CustomError(404, "User not found")
            }
            return user

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}