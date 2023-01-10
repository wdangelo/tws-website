import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialBar from '../components/SocialBar'
import NavBar from '../components/NavBar'
import Image from 'next/image'



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

        
        <div className={styles.frameBody}>

            <Image className={styles.indexImage} src={'/security.jpg' } width={900} height={700} />


          <div className={styles.indexText} >
            <h1>TWS Soluções em Tecnologia</h1>
            <p>
            Nosso propósito e objetivo principal é Humanizar as relações entre Clientes e Processos, conhecendo a fundo o modelo de negócio, adotando conceitos de entrega e feedback contínuo, onde o Cliente estará SEMPRE integrado em todos os passos da entrega de seu projeto.
            </p>
            <p>
            Nossos produtos são voltados para pequenas, médias e grandes empresas, com o intuito de melhorar sua performance e manter maior segurança cibernética na gestão de TI.
            </p>
            <p>
            Projetos elaborados pelos nossos especialistas de TI, em vários parques diferentes como: Infraestrutura, Cybersegurança, Suporte, Desenvolvimento e Banco de Dados usando ferramentas ágeis, para a otimização dos processos dos nossos clientes.
            </p>
          </div>

        </div>


      </main>


      <footer className={styles.footer}>
        
      <p> Oferecemos atendimento humanizado e personalizado.</p>
      
      
      </footer>
    </div>
    </>
  )
}

export default Home
