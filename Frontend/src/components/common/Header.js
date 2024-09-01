import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import UserProfileDropdown from "../pages/ProfileUser";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">{t('app_name')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/matematica">{t('nav_matematica')}</Nav.Link>
            <Nav.Link href="/fisica">{t('nav_fisica')}</Nav.Link>
            <Nav.Link href="/quimica">{t('nav_quimica')}</Nav.Link>
            <Nav.Link href="/biologia">{t('nav_biologia')}</Nav.Link>
            <Nav.Link href="/portugues">{t('nav_portugues')}</Nav.Link>
            <Nav.Link href="/redacao">{t('nav_redacao')}</Nav.Link>
            <Nav.Link href="/historia">{t('nav_historia')}</Nav.Link>
            <Nav.Link href="/geografia">{t('nav_geografia')}</Nav.Link>
            <Nav.Link href="/simulados">{t('nav_simulado')}</Nav.Link>
          </Nav>
          <Nav>
            <UserProfileDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
