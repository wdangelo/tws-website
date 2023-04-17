import Image from 'next/image'
import ImageBody from '../../public/pexels-fauxels-3184465.jpg'
import logoBarra from '../../public/logo-barra.png'

import styles from '../../styles/CardHistory.module.css'


export default function CardHistory() {
    return(
        <>  
            <section className={styles.CardHistory} id="quem-somos">
                <div className={styles.quadro}>
                    
                    <Image 
                    src={ImageBody}
                    alt="TWS Logo" 
                    width={550}
                    height={500}

                    />
                </div>

                <div className={styles.quadroDescription}>
                    <section className={styles.logoBarra}>
                        <Image 
                        src={logoBarra}
                        alt="TWS Logo" 
                        width={330}
                        height={120}
                        />

                    </section>

                <p>Olá, muito prazer, somo a TWS Soluções em Tecnologia!</p>
                <p>Somos uma empresa fundada por pessoas apaixonadas por tecnologia e com mais de 10 anos de experiencia como profissionais, com uma visão diferente do mercado atual.</p>
                <p>Sim, queremos unir processos e pessoas, humanizar esse relacionamento que hoje é tão distante entre contratante e contratada. Aproximar e incluir ao máximo cada cliente, cada história, cada cultura.</p>
                <p>Na TWS os clientes são únicos. Cada projeto é único. Com foco nas peculiaridades que cada empresa necessita.</p>
                </div >
            </section>

        </>
    )
}