let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// primeiro o comsole vai imprimir 10\\
// no segundo vai imprimir 10 e 5 pois o B recebeu um novo valor\\

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)