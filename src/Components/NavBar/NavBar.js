import React from 'react';
import {Navbar, Container, Nav } from "react-bootstrap";


export default function NavBar() {
  return (
    <div>
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CHeck-Api</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>
    </div>
  )
}
