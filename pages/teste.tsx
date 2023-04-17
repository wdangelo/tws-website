import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Teste.module.css'
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../public/logo-barra.png'

function teste() {
  return (
    <Navbar expand="xxl" className={`${styles.Navbar}`} >

      <Container>
        
        <Navbar.Brand href="#home">
        <Image 
                src={logo}
                alt="TWS Logo"
                width={220}
                height={80}     
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.menu}>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Serviços</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <Button variant="primary">Contato</Button>{' '}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default teste;
