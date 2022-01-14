import styles from '../styles/Resposta.module.css'
import RespostasModel from '../model/respostas'


interface RespostaProps{
    valor: RespostasModel
    indice: number
    letra: string
    corletra: string
    respostaFornecida: (indice: number) => void
}



export default function Repsostas(props: RespostaProps) {
    const resposta = props.valor
    return (
        <div className={styles.resposta}
         onClick={() => props.respostaFornecida(props.indice)} >
            <div className={styles.conteudoResposta}>
                {!resposta.revelada ? (
                <div className={styles.frente}>
                    <div className={styles.letra} 
                    style={{backgroundColor: props.corletra}}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                 </div> 
                ) : (
                <div className={styles.verso}>
                    {resposta.certa ? (
                    <div className={styles.certa}>
                        <div>A Resposta correta é...</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>
                    ) : (
                    <div className={styles.errada}>
                        <div>A Resposta Informada está Errada...</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>
                    )}
                </div>

                )}
            </div>
        </div>
    )

}