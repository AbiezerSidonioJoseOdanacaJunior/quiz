import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enuciado from './Enuciado';
import Repsostas from './Respostas';
import Temporizador from './Temporizador'

interface QuestaoProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { valor: 'A', cor: '#f2c866'},
    { valor: 'B', cor: '#f266ba'},
    { valor: 'C', cor: '#85d4f2'},
    { valor: 'D', cor: '#bce596'},
]

export default function Questao(props) {
    const questao = props.valor 

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) =>{
            return <Repsostas 
                key={i}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corletra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
             />
        })
    }

    return(
        <div className={styles.questao}>
           <Enuciado texto={questao.enuciado}/>
           <Temporizador duracao={10} tempoEsgotado={props.tempoEsgotado} />
            {renderizarRespostas() }        
        </div>
    )

}