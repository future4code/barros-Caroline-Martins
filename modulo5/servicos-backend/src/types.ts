export type User = {
    id: string,
    cep: string,
    logradouro: string,
    numero: number,
    complemento?: string,
    bairro: string,
    cidade: string,
    estado: string
}