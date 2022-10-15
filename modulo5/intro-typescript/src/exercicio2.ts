console.log("exercicio 2")

const input = require("readline-sync")

function coresFavoritas(): void{
   const cor1:string = input.question("Insira sua primeira cor favorita?")
   const cor2:string = input.question("Insira sua segunda cor favorita?")
   const cor3:string = input.question("Insira sua terceira cor favorita?")
    
   console.log([cor1, cor2, cor3])


}
coresFavoritas()

// console.log(coresFavoritas("cor1", "cor2", "cor3"))



// const cor1= process.argv[2]
// const cor2= process.argv[3]
// const cor3= process.argv[4]


// function coresFavoritas(cor1:string, cor2:string, cor3:string): any {
//         return [cor1, cor2, cor3]
// }

// console.log(coresFavoritas(cor1, cor2, cor3))
