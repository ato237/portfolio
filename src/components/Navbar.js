import React from 'react';
import { Container,Elemenets, Nav, ElemenetsL,Route } from './NavbarElements';

function Navbar() {
  return (
  <Container>
      <Nav>
          <ElemenetsL>ATO.</ElemenetsL>
          <div style={{paddingLeft: "240px", paddingRight: "240px"}}></div>
          <Elemenets><Route to = "/">Home</Route></Elemenets>
          <Elemenets><Route to = "/projects">Projects</Route></Elemenets>
          <Elemenets><Route to = "/blog">Blog</Route></Elemenets>
          <Elemenets><Route to = "/about">About</Route></Elemenets>
          <Elemenets><Route to ="/contacts">Contacts</Route></Elemenets>
      </Nav>
  </Container>
  );
}

export default Navbar;
