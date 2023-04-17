import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import { Button, Form } from "react-bootstrap";
import Image from 'next/image';
import whatsapp from '../public/whatsapp3.png'

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
        
        <div className={styles.container}>
        
        
          <Head>
            <title>TWS Soluções em Tecnologia</title>
            <meta name="description" content="Atendimento Humanizado e Personalizado!" />
            <link rel="icon" href="/tws.ico" />
          </Head>
    
          <main className={styles.main}>
            <div className={styles.cardBody}>
                <section className={styles.cardText} >
                    <h1>Faça já uma avaliação</h1>
                    <Link href="https://api.whatsapp.com/send?phone=5519992316750&text=Ol%C3%A1,%20somos%20a%20TWS%20Solu%C3%A7%C3%B5es%20em%20Tecnologia.%0AObrigado%20por%20entrar%20em%20contato.%0AEm%20que%20podemos%20ajudar?"
                    
                    >
                    <Image src={whatsapp}
                        style={{cursor: 'pointer'}}
                        className={styles.buttonWhatsApp}
                        width={60}
                        height={60}
                        />
                    </Link>

                </section>
            </div>


          </main>


            <div className={styles.contactForm}>


                    <Form onSubmit={sendEmail} style={{width: '60%', position: 'relative', zIndex: 1}}>
                        <h1 className={styles.TitleContact}>Contato</h1>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="text" placeholder="Joao da Silva Santos" onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu melhor email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="Telefone de contado" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" placeholder="Digite sua mensagem aqui." rows={10} onChange={(e) => setMessage(e.target.value)} value={message}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" style={{width: '200px', height: '60px', fontSize: '20px', fontWeight: '500'}}>
                       Enviar
                    </Button>
                    </Form>


        </div>

          <footer className={styles.footer}>
            
          <p>TWS Tecnologia ©  Criado por 2023 TWS soluções em Tecnologia</p>
          
          
          </footer>
        </div>
        </>

    )
}