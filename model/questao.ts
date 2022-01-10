export default class QuestaoModel {
    #id: number
    #enuciado: string
    #respostas: any[]
    #acertou: boolean
    // #respondida: boolean

    constructor(id: number, enuciado: string, respostas: any[], acertou = false) {
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
        //FIx me implementar
        return false
    }
}