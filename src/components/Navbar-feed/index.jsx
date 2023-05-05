import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="border-bottom mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="" alt="Logo" className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Friends</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Groups</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Messages</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Notifications</Nav.Link>
            <DropdownButton
              align="end"
              title="Me"
              id="dropdown-menu-align-end"
              variant="secondary"
              menuVariant="dark"
            >
              <Dropdown.ItemText className="text-center">Name here</Dropdown.ItemText>
              <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Sign out</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;