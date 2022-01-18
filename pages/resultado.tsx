import styles from '../styles/Resultados.module.css'
import Link from "next/link";
import Estatistica from '../componetns/Estatistica';
import { useRouter } from "next/router";
import Botao from '../componetns/Botao';


export default function resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultados}>
            <h1>Resuoltado Final</h1>
            <div style={{display: 'flex'}}>
                <Estatistica  texto="Perguntas" valor={total} corFundo={''} corFonte={''}/>
                <Estatistica  texto="Certas" valor={certas}
                corFundo='#9cd2a4' corFonte={''}/>
                <Estatistica  texto="Percentual" valor={`${percentual}%`}
                corFundo='#de6a33' corFonte={''}/> 
            </div> 
            <Botao href='/' texto='Tentar Novamente' /> 
        </div>
    )
}