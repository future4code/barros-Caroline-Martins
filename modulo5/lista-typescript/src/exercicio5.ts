console.log("Exercicio 5");

type User={
    name:string,
    email:string,
    role: typeUser
}

enum typeUser{
    ADMIN = "admin",
    USER = "user"
}

const listUser: User[]=[
    {name: "Rogério", email: "roger@email.com", role: typeUser.USER},
	{name: "Ademir", email: "ademir@email.com", role: typeUser.ADMIN},
	{name: "Aline", email: "aline@email.com", role: typeUser.USER},
	{name: "Jéssica", email: "jessica@email.com", role: typeUser.USER},  
	{name: "Adilson", email: "adilson@email.com", role: typeUser.USER},  
	{name: "Carina", email: "carina@email.com", role: typeUser.ADMIN}  
]

function arrayUser(list: User[]):string[]{
    const filtroList= list.filter((item)=>{
        return item.role === typeUser.ADMIN
    }).map((i)=>{
        return i.email 
    })

    return filtroList
}

console.log(arrayUser(listUser))