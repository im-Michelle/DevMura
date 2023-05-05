import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import './Navbar-Default.css'

function NavbarDefault() {
  return (
    <Navbar  expand="lg" className='navbardefault__container' bg='navbardefault__container' fixed='top'>
      <Container fluid  >    
        <div className="d-lg-none">
            <Button variant="outline-light">Sign up</Button>{' '}
        </div>
        
        <Navbar.Brand  href="#" className="text-light" >DevMura</Navbar.Brand>

        {<Navbar.Toggle aria-controls="navbarScroll" />}

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Product" id="navbarScrollingDropdown" className="text-light">
              <NavDropdown.Item href="#action3" btn-light>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Product" id="navbarScrollingDropdown" className="text-light">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='dropdown-menuCustom'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-block mx-3" >
            <Button variant="light">Sign in</Button>{' '}
        </div>
        <div className="d-none d-lg-block">
            <Button variant="outline-light">Sign up</Button>{' '}
        </div>
          
      </Container>
    </Navbar>
  );
}

export default NavbarDefault;




