import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enuciado from './Enuciado';

interface QuestaoProps {
    valor: QuestaoModel
}

export default function Questao(props) {
    const questao = props.valor 

    return(
        <div className={styles.questao}>
           <Enuciado texto={questao.enuciado}/>

        </div>
    )

}