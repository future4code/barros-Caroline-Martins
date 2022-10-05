console.log("exercício 2.A");

const clients = [
    { id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano}"},
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

function newClient (id, nome){
    
    const cadastro = clients.map((i)=>{  
        return i.id
    })
    if (cadastro.includes(id)){
        return (`ERRO. Parametro invalido, ${id} ja existe.`)
    }else{
       clients.push({ id:id, nome:nome})
    }
    
return clients
}

console.log(newClient(5, "astrodev"))
console.log(newClient(4, "astrodev"))


console.log("exercicio 2.B")

const tabuada=(numero)=>{
    if(typeof numero === "string"){
        return `Erro. Parâmetro inválido (deve ser um número)`
    }if(numero >=10 || numero < 1){
        return `Erro. Parâmetro inválido (número precisa valer entre 1 e 10)`
    }else{

        return `${numero} X 0 = 0
        ${numero} X 1 = ${numero}
        ${numero} X 2 = ${numero * 2}
        ${numero} X 3 = ${numero * 3}
        ${numero} X 4 = ${numero * 4}
        ${numero} X 5 = ${numero * 5}
        ${numero} X 6 = ${numero * 6}
        ${numero} X 8 = ${numero * 7}
        ${numero} X 9 = ${numero * 9}
        ${numero} X 10 = ${numero * 10}
        `
    }
}

console.log(tabuada(3))
console.log(tabuada("10"))
console.log(tabuada(50))
