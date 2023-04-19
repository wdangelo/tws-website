import { Card } from "react-bootstrap";
import styles from "../../../styles/Contact/CardBodyContact.module.css"
import Link from "next/link";
import Image from 'next/image';
import whatsapp from '../../../public/whatsapp3.png'

export default function CardBodyContact() {


    return (
        <Card className={styles.main}>
            <section>
                <h1>Faça já uma avaliação</h1>
                <Link href="https://api.whatsapp.com/send?phone=5519992316750&text=Ol%C3%A1,%20somos%20a%20TWS%20Solu%C3%A7%C3%B5es%20em%20Tecnologia.%0AObrigado%20por%20entrar%20em%20contato.%0AEm%20que%20podemos%20ajudar?">
                <Image src={whatsapp}
                    style={{cursor: 'pointer'}}
                    className={styles.buttonWhatsApp}
                    alt='Imagem WhatsApp'
                    width={60}
                    height={60}
                    />
                </Link>
                
            </section>

        </Card>
    )
}