import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router';

function AppNavBar() {
    const activeStyle = {
    color: '#007bff', // Bootstrap's primary blue
    fontWeight: 'bold',
  };
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Button variant="outline-secondary" className="me-2">Signin</Button>
          <Button variant="primary">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
