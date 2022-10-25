import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Maintence from './components/maintence'
import SocialBar from './components/SocialBar'
import NavBar from './components/NavBar'



const Home: NextPage = () => {
  return (
    <>
    <NavBar />
    <div className={styles.container}>
    
        <SocialBar />
      <Head>
        <title>TWS Soluções em Tecnologia</title>
        <meta name="description" content="Atendimento Humanizado e Personalizado!" />
        <link rel="icon" href="/tws.ico" />
      </Head>

      <main className={styles.main}>

        <h1>TWS Soluções em Tecnologia</h1>

        <h2>Site em Construção</h2>
        <Maintence />

      </main>


      <footer className={styles.footer}>
        
      <p> Oferecemos atendimento humanizado e personalizado.</p>
      
      
      </footer>
    </div>
    </>
  )
}

export default Home
