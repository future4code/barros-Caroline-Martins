export type user = {
    id: number,
    name: string,
    email: string,
    type: userType
}

export enum userType {
    TEACHER = "teacher",
    OPERATIONS= "operations",
    CX= "cx"
}