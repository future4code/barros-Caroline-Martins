```Javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let duzia = 1.00
  let menosDuzia = 1.30
  if(quantidade > 12){
    return quantidade * menosDuzia
    }else if(quantidade <= 12){
       return quantidade * duzia
    }
}
return calculaPrecoTotal()