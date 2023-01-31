import { v4 } from "uuid"

function generateId(): string {
    return v4();
}
export default generateId
