import { embarralhar } from "../functions/array"
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

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i 
            const deveRevelar = respostaSelecionada || resposta.certa
            return respostaSelecionada ? resposta.revelar() : resposta

        })
        return new QuestaoModel( this.id, this.enuciado, respostas, acertou)
    }

    embarralharRespostas(): QuestaoModel {
        let respostasEmbarralhadas = embarralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enuciado, respostasEmbarralhadas, this.#acertou)
    }


    toObject() {
        return {
            id: this.#id,
            enuciado: this.#enuciado,
            respondida: this.respondida,
            acertou: this.acertou,
            respostas: this.#respostas.map(resp => resp.toObject()),
        }
    }
}