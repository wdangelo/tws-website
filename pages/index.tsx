import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import CardMovie from '../components/CardMovie'


const Home: NextPage = () => {
  return (
    <>
    <NavBar />
    
    <div className={styles.container}>
    
    
      <Head>
        <title>TWS Soluções em Tecnologia</title>
        <meta name="description" content="Atendimento Humanizado e Personalizado!" />
        <link rel="icon" href="/tws.ico" />
      </Head>

      <main className={styles.main}>

        <CardMovie />


      </main>

      
      <footer className={styles.footer}>
        
      <p>Feito por TWS©</p>
      
      
      </footer>
    </div>
    </>
  )
}

export default Home
