import styles from '../../styles/CardServices.module.css'
import Image from 'next/image'
import ImgSuport from '../../public/icons/suport-icon (1).png'
import ImgWebsite from '../../public/icons/website-icon (1).png'
import ImgPentest from '../../public/icons/monitor (1).png'
import ImgFirewall from '../../public/icons/network-server (1).png'
import ImgInfra from '../../public/icons/a-infraestrutura (1).png'
import ImgConsult from '../../public/icons/consultor (1).png'

export default function CardServices() {
    return(
        <>  
            <section className={styles.Services} id='services'>

                <h1 className={styles.title}>Serviços</h1>
                
                <section className={styles.CardServicesTop}>

                    <div className={styles.Service1}>
                            <Image
                            src={ImgSuport}
                            width={100}
                            height={100}
                            alt='Imagem Suport'
                            />
                        <h1>Suporte em T.I.</h1>
                        <p>Terceirização do suporte N1 e N2, atendimento e soluções de problemas remotamente.</p>
                    </div>

                    <div className={styles.Service2}>
                            <Image
                            src={ImgWebsite}
                            width={100}
                            height={100}
                            alt='Imagem WebSite'
                            />
                        <h1>Criação de Website</h1>
                        <p>criação de paginas web personalizadas para apresentação do seu negócio.</p>
                    </div>

                    <div className={styles.Service3}>
                            <Image
                            src={ImgPentest}
                            width={100}
                            height={100}
                            alt='Imagem Pentst'
                            />
                        <h1>Pentest Personalizado</h1>
                        <p>Campanha de conscientização, testes de phishing e vulnerabilidade da TI.</p>
                    </div>

                </section>

                <section className={styles.CardServicesBotton}>

                    <div className={styles.Service4}>
                    <Image
                            src={ImgInfra}
                            width={100}
                            height={100}
                            alt='Imagem Infra'
                            />
                        <h1>Infraestrutura de T.I.</h1>
                        <p>Estrutura, cabeamento e toda configuração do ambiente de rede.</p>
                    </div>

                    <div className={styles.Service5}>
                    <Image
                            src={ImgConsult}
                            width={100}
                            height={100}
                            alt='Imagem consultoria'
                            />
                        <h1>Consultoria em T.I.</h1>
                        <p>Levantamento e auxilio das necessidades no ambiente de TI.</p>
                    </div>

                    <div className={styles.Service6}>
                    <Image
                            src={ImgFirewall}
                            width={100}
                            height={100}
                            alt='Imagem Firewall'
                            />
                        <h1>Servidores e Firewalls</h1>
                        <p>Soluções em servidores, Firewall, e monitoramento do ambiente.</p>
                    </div>

                </section>

                
                </section>

        </>
    )
}