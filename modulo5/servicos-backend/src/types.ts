export type Address = {
    cep: string,
    logradouro: string,
    numero: number,
    complemento?: string,
    bairro: string,
    cidade: string,
    estado: string
}