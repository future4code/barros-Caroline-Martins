import axios from "axios"

async function getAddress(cep:string) {
    try{
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    
    return {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
    }
    
    }catch(erro: any){
        throw new Error(erro);
    }
    
}

export default getAddress;