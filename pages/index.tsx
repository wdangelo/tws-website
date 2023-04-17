import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'


import 'bootstrap/dist/css/bootstrap.min.css';
import CardBody from '../components/CardBody/CardBody'
import CardHistory from '../components/CardHistory';
import CardServices from '../components/CardServices';

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

        <CardBody />

        
      </main>

      <div>
      <CardHistory />
      <CardServices />
      </div>
      <footer className={styles.footer}>
        
      <p>TWS Tecnologia ©  Criado por 2023 TWS soluções em Tecnologia</p>
      
      
      </footer>
    </div>
    </>
  )
}

export default Home
