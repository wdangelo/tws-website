import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import { Button, Form } from "react-bootstrap";
import Image from 'next/image';
import whatsapp from '../public/whatsapp3.png'
import CardBodyContact from "../components/Contact/CardBodyContact";
import CardFormContact from "../components/Contact/CardFormContact";

export default function Contact () {
  
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function sendEmail(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault()
    const serviceId = 'service_zx87o1y'
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

      console.log(name, email)
    }, (err) => {console.log("ERRO:" + err)})
  }

    return (

        <>
        <NavBar />

        <CardBodyContact />
        <CardFormContact />
        <div className={styles.container}>
        
        
          <Head>
            <title>TWS Soluções em Tecnologia</title>
            <meta name="description" content="Atendimento Humanizado e Personalizado!" />
            <link rel="icon" href="/tws.ico" />
          </Head>

          <footer className={styles.footer}>
            
          <p>TWS Tecnologia ©  Criado por 2023 TWS soluções em Tecnologia</p>
          
          
          </footer>
        </div>
        </>

    )
}