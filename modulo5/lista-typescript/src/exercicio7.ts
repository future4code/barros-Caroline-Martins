console.log("Exercicio 7");

type produtos={
    nome:string,
    quantidade:number,
    valorUnitario:number
}
const products: produtos[]=[
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

type organizado={
    nome:string,
    quantidade:number,
    valorUnitario:string
}

function estoqueOrganizado(listProducts: produtos[]):organizado[]{
   let listOrganizada= listProducts.map((i)=>{
        return {
            nome:i.nome,
            quantidade:i.quantidade,
            valorUnitario:ajustaPreco(i.valorUnitario)
        }
    })
return listOrganizada.sort((a,b)=>a.quantidade - b.quantidade)
}

console.log(estoqueOrganizado(products))