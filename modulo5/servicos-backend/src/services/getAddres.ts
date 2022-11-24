import axios from "axios"

async function getAddres(cep:string) {
    try{
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    
    }catch(erro: any){
        throw new Error(erro);
    }
    
}

export default getAddres;