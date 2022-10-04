console.log("exercicio 1");


function conversor(temperaturaCelsius, medida) {
    if(medida === "F" ){
        farenheit = temperaturaCelsius*9/5+32
        return(`${temperaturaCelsius}° Celsius é equivalente a ${farenheit}° Farenheit.`)
    } if (medida === "K"){
        kelvin = temperaturaCelsius+273.15
        return(`${temperaturaCelsius}° Celsius é equivalente a ${kelvin}° Kelvin`)
    } if (medida !== "F" && medida !== "K"){
        return (`Erro. Parametro invalido ${medida}`)
    }if( typeof Number === temperaturaCelsius ){
        return(`ERRO. Parametro errado ${temperaturaCelsius}`)
    }
}

console.log(conversor(30, "F"))
console.log(conversor(40, "K"))
console.log(conversor(40,"j"))
console.log(conversor("trinta"))