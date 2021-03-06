import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Teporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
            colorsTime={[10, 10, 10, 10]}
            isPlaying
            duration={props.duracao}
            size={120}
            onComplete={props.tempoEsgotado}
            colors={[
                '#bce596',
                '#f7b801',
                '#ed827a']}
               > 
             {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}