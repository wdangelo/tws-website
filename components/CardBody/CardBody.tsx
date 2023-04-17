import styles from '../../styles/Cardbody.module.css'
import { Button } from 'react-bootstrap';

export default function CardBody() {
    return(
        <>  
            <section className={styles.CardBody}>

            <section className={styles.description}>

                <h1>Soluções em tecnologia</h1>
                <h2>Tecnologia Humanizada</h2>
                <h2>e Personalizada</h2>
                <Button href='/contact'>Entre em Contato</Button>
            </section>
            </section>

        </>
    )
}