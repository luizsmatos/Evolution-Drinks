import React from 'react';
import './Header.css';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import { Avatar, Chip } from '@mui/material';
import icone from '../../images/icone.png';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container fluid>
          <img
            alt="logo"
            src={icone}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="/">Evolution Drinks</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Chip color="primary" avatar={<Avatar>L</Avatar>} label="Luiz Gustavo" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
