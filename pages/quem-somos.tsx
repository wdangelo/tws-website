import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";

import { ContainerBody, ContainerText, Main, Footer } from "./components/Styleds/Container";

export default function quemSomos () {
    return (

        <>
        <NavBar />
        <ContainerBody>
        
            <SocialBar />
          <Main>
  

            <ContainerText>
                
                <h1>Quem Somos</h1>
                <p>Somos uma empresa fundada por pessoas apaixonadas por tecnologia mas com visão diferente do mercado atual.</p>
                <p>Sim, queremos unir processos e pessoas, humanizar esse relacionamento que hoje é tão distante de contratantes e contratadas.
                Mudar o conceito estruturado que temos hoje. Aproximar e incluir ao máximo cada cliente, cada história, cada cultura.</p>
                <p>Na TWS os clientes são únicos. Cada projeto é único. Com foco nas peculiaridades que cada empresa necessita.</p>
            </ContainerText>
    
          </Main>
    
    
          <Footer>
          <p> Oferecemos atendimento humanizado e personalizado.</p>
          
      
          </Footer>
        </ContainerBody>
        </>


    )
}
