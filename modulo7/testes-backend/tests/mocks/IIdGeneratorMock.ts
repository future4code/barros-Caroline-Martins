import { IIdGenerator } from "../../src/business/posts";

export class IdGeneratorMock implements IIdGenerator {
    public generate = jest.fn(() => {
        return "id"
    })
}