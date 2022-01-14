import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enuciado from './Enuciado';
import Repsostas from './Respostas';

interface QuestaoProps {
    valor: QuestaoModel
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
             />
        })
    }

    return(
        <div className={styles.questao}>
           <Enuciado texto={questao.enuciado}/>
            {renderizarRespostas() }        
        </div>
    )

}