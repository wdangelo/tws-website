import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Maintence from './components/maintence'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TWS Soluções em Tecnologia</title>
        <meta name="description" content="Atendimento Humanizado e Personalizado!" />
        <link rel="icon" href="/tws.ico" />
      </Head>

      <main className={styles.main}>
        <Image 
        src={logo}
        />

        <h1>TWS Soluções em Tecnologia</h1>

        <h2>Site em Construção</h2>
        <Maintence />

      </main>

      <footer className={styles.footer}>
      <p> Oferecemos atendimento humanizado e personalizado.</p>
      
      
      </footer>
    </div>
  )
}

export default Home
