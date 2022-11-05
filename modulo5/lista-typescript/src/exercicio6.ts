console.log("Exercicio 6");

type Clients={
    cliente: string,
    saldoTotal:number,
    debitos:number[]
}

const ativos: Clients[]=[
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoNegativo(list:Clients[]):Clients[]{

    const debitosClientes= list.map((list)=>{
        let debitos =  list.debitos.reduce((a:number, b:number)=> a + b, 0)
        return {cliente: list.cliente, saldoTotal:(list.saldoTotal - debitos),debitos: []}
    }).filter((i)=>{
        return i.saldoTotal< 0 
    })

return debitosClientes
}

console.log(saldoNegativo(ativos));


// for(let i = 0; i < list.length;i++ ){
//   let debitosClientes=  list[i].debitos.reduce((a:number, b:number)=> a + b, 0)
// }
// return debitosClientes