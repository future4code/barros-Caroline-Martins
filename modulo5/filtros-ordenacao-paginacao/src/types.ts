export type user = {
    id: number,
    name: string,
    email: string,
    type: userType
}

enum userType {
    TEACHER = "teacher",
    OPERATIONS= "operations",
    CX= "cx"
}