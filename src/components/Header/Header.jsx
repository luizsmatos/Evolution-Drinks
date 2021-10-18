import React from 'react';
import './Header.css';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import { Avatar, Chip } from '@mui/material';
import icone from './icone.png';

function Header() {
  return (
    <header>
      <Navbar className="shadow p-3 mb-5" collapseOnSelect expand="xl" bg="dark" varian="light">
        <Container fluid>
          <img
            alt="logo"
            src={icone}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="/"><span className="title-header">Evolution Drinks</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><span className="title-header">Home</span></Nav.Link>
            </Nav>
            <Chip color="warning" avatar={<Avatar>L</Avatar>} label="Luiz Gustavo" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
