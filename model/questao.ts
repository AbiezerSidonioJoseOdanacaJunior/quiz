import RespostasModel from "./respostas"

export default class QuestaoModel {
    #id: number
    #enuciado: string
    #respostas: RespostasModel[]
    #acertou: boolean
    // #respondida: boolean

    constructor(id: number, enuciado: string, respostas: RespostasModel[], acertou = false) {
        this.#id = id
        this.#enuciado = enuciado
        this.#respostas =respostas
        this.#acertou = acertou        
    }

    get id() {
       return this.#id
    }

    get enuciado() {
        return this.#enuciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get respondida() {
        for(let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        return false
    }
}