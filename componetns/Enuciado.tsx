import styles from '../styles/Enuciado.module.css'

interface EnuciadoProps {
    texto: string
}

export default function Enuciado(props: EnuciadoProps) {
    return (
        <div className={styles.enuciado }>
            <span className={styles.texto}>
                {props.texto}

            </span>
        </div>
    )

}