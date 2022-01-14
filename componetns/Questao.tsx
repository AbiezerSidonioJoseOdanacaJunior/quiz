import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enuciado from './Enuciado';
import Repsostas from './Respostas';

interface QuestaoProps {
    valor: QuestaoModel
}

export default function Questao(props) {
    const questao = props.valor 

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) =>{
            return <Repsostas 
                key={i}
                valor={resposta}
                indice={i}
                letra='A'
                corletra='#f2c866'
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