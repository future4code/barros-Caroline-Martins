import { CustomError } from "./CustomError";

export class InvalidBody extends CustomError{
    constructor(){
        super(400, "Body incorreto verificar (title,  description, durationInMinutes, yearOfRelease")
    }
}

