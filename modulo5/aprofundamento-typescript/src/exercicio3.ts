console.log("exercicio 3")

const autores= process.argv[2]

type Postagem = {
    autor: string,
    texto: string
}

const posts: Postagem[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]
// 3 dias depois entendi que para o filter funcionar obviamente precisa ser um array e tenho que passar como tipagem
//precisa entrar um array e uma string como tipos 
function buscarPostsPorAutor(posts: Postagem[], autorInformado: string): Postagem[] {
    return posts.filter((post) => {
        return post.autor === autorInformado
    }
    )
}

console.log(buscarPostsPorAutor(posts, autores))