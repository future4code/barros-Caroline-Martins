````javascript
function criarArrayNomesAnimais() {
    // escreva o codigo aqui
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    let nomesDogs= animais.map((item,index,array) =>{
       return item.nome
}) 
return nomesDogs
}