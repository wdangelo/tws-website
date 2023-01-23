import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/CardMovie.module.css'

export default function CardMovie() {
    return(
        <>  
          <main className={styles.container}>
            <header className={styles.card}>
                
                <Image src='/logovideo.png' width={500} height={160} className={styles.logovideo} ></Image>
                  <div className={styles.slogan}>
                    <h2>Tecnologia</h2>
                      <h3>Humanizada</h3>
                      
                      <h2>E Personalizada</h2>
                  </div>


            </header>

            <video autoPlay loop muted  className={styles.bgVideo}>
                <source src='/teste2.mp4' type='video/mp4' />
            </video>
        </main>

        </>
    )
}