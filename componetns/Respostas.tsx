import styles from '../styles/Resposta.module.css'
import RespostasModel from '../model/respostas'


interface RespostaProps{
    valor: RespostasModel
    indice: number
    letra: string
    corletra: string
}



export default function Repsostas(props: RespostaProps) {
    const resposta = props.valor
    return (
        <div className={styles.resposta}>
            <div className={styles.frente}>
                <div className={styles.letra}>
                    {props.letra}
                </div>
                <div className={styles.valor}>
                    {resposta.valor}
                </div>
            </div>
            <div className={styles.verso}>

            </div>
        </div>
    )

}