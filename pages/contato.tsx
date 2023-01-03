import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import SocialBar from "../components/SocialBar";
import styles from '../styles/Contato.module.css'

import { ContainerBody, ContainerText, Main, Footer } from "../components/Styleds/Container";


export default function Contato () {
  
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function sendEmail(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault()
    const serviceId = 'service_gd8wge6'
    const templateId = 'template_f5jofwg'
    const publicKey = 'PtChbmSYuIYyYQOO2'
    const templateParams = { 
      from_name: name,
      message: message,
      email: email,
      phone: phone
    }
    if(!name || !email || !phone || !message) { 
      alert('Preencha todos os campos!')
      return
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((res) => {
      alert(`Olá ${name}, obrigado por entrar em contato, retornaremos em breve!`)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    }, (err) => {console.log("ERRO:" + err)})
  }

    return (

        <>
        <NavBar />
        <ContainerBody>
        
            <SocialBar />
          <Main>
  

            <ContainerText>
            
                <div className={styles.container}>
                <h1 className={styles.title} >Contato</h1>
                  <form className={styles.form} onSubmit={sendEmail} >
                    
                    <input type="text" className={styles.input} placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
                    <input type="email"  className={styles.input} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="tel" className={styles.input} placeholder="Telefone para contato" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                    <textarea className={styles.textarea} placeholder="Digite sua mensagem..."  onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

                    <input type="submit" className={styles.button} value="Enviar" />
                    
                  </form>
                </div>
                


            </ContainerText>
    
          </Main>
    
    
          <Footer>
          <p> Oferecemos atendimento humanizado e personalizado.</p>
          
      
          </Footer>
        </ContainerBody>
        </>


    )
}