import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../styles/Navbar.module.css'
import { Button } from 'react-bootstrap';
import Image from 'next/image';

import logo from '../../public/logo-barra.png'

export default function NavBar() {
    return(
        <Navbar expand="xxl" className={`${styles.Navbar}`} >

        <Container>
          
          <Navbar.Brand href="/">
          <Image 
                  src={logo}
                  alt="TWS Logo"
                  width={195}
                  height={65}     
            />
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.menu}>
            <Nav className="mr-auto" >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#services">Serviços</Nav.Link>
              <Nav.Link href="#quem-somos">Quem somos</Nav.Link>
              <Button className={styles.NavButton} href='/contact' variant="primary">Contato</Button>{' '}
  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}