import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {

  return (
    <div>
      <Navbar fixed="top" bg="light" collapseOnSelect expand="lg" >
        <Container className="d-flex  justify-content-between">
          <div>
            <Navbar.Brand href="#home"><small style={{ color: "aquamarine", backgroundColor: "grey", padding: "4px", borderRadius: "10px" }}> T a l  h a </small></Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className="toggle">X</span> </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >
                {/* <LinkContainer to="/">
                  <Nav.Link className="nav-links">Home</Nav.Link>
                </LinkContainer> */}
                <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
                {/* <LinkContainer to="/about">
                  <Nav.Link className="nav-links">About</Nav.Link>
                </LinkContainer> */}
                <Nav.Link className="nav-links" href="#about">About</Nav.Link>
                {/* <LinkContainer to="/projects">
                  <Nav.Link className="nav-links">Projects</Nav.Link>
                </LinkContainer> */}
                <Nav.Link className="nav-links" href="#projects">Projects</Nav.Link>
                {/* <LinkContainer to="/contact">
                  <Nav.Link className="nav-links">Contact</Nav.Link>
                </LinkContainer> */}
                <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
