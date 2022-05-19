
```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salarioFixo = 2000
  let valorVendido = valorTotalVendas * (5/100) 
  let valorPorCarro = qtdeCarrosVendidos * 100
  let salarioComissao = salarioFixo + valorVendido + valorPorCarro
return salarioComissao
}
```
