import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>&copy; {new Date().getFullYear()} PreparaEnem. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a href="/privacy-policy">Política de Privacidade</a> | 
            <a href="/terms-of-service"> Termos de Serviço</a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
