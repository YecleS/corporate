import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Header.css';

const Header = () => {
  return (
    <Navbar className="header">
      <Container className="header__container">
        <Navbar.Brand href="#home" className="header__logo" >Corporate</Navbar.Brand>
          <Nav className="header__nav-links">
            <Nav.Link className='header__link' href="#home">Home</Nav.Link>
            <Nav.Link className='header__link' href="#about">About</Nav.Link>
            <Nav.Link className='header__link' href="#services">Services</Nav.Link>
            <Nav.Link className='header__link' href="#works">Works</Nav.Link>
            <Nav.Link className='header__link' href="#teams">Teams</Nav.Link>
            <Nav.Link className='header__link' href="#testimonial">Testimonials</Nav.Link>
            <Nav.Link className='header__link' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='header__link' href="#blog">Blog</Nav.Link>
            <Nav.Link className='header__link' href="#contact">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Header