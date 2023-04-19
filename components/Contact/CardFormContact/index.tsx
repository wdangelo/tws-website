import { Button, Card, Form } from "react-bootstrap";
import styles from "../../../styles/Contact/CardFormContact.module.css"
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function CardFormContact() {

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
    return(
        <Card className={styles.main}>
            
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
        </Card>
    )
}