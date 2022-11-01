import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/booklogo.jpg'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import '../Navber/Navber2.css'
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navber2 = ({carts}) => {
  const [user] = useAuthState(auth);
  const SingOutHandle = ()=>{
    signOut(auth);
  }
    return (
        <div>
          <Navbar bg="light" expand="lg">
      <Container fluid>
       <Link to='/'><img className='logo' src={logo} alt=''/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="All Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav.Link className='ms-5' as={Link} to="/cart">
          <ShoppingCartIcon className='add-to-icon1'/>{carts?.length}
            </Nav.Link>

            {user?.email?<>
       <p onClick={SingOutHandle} className="mt-3 ms-3 text-black sing-Out">
       SingOut
       </p>
      
      </>:
              
        <Nav.Link as={Link} to="/login" className='ms-3'>
        <svg className='fs-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> Login
            </Nav.Link>}
      </Container>
    </Navbar>
        </div>
    );
};

export default Navber2;