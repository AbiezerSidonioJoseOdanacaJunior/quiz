export default class RespostasModel {
    #valor: string
    #certa: boolean
    #revelada: boolean


    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return new RespostasModel(valor, true)
    }

    static errada(valor: string) {
        return new RespostasModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    toObject() {
        return {
         valor: this.#valor,
         certa: this.#certa,
         revelada: this.#revelada
        }
    }
}