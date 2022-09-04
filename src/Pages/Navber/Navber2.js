import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Images/booklogo.jpg'
import '../Navber/Navber2.css'
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navber2 = () => {
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
        <Nav.Link className='ms-5'>
              Track Order
            </Nav.Link>

            {user?.email?<>
       <p onClick={SingOutHandle} className="mt-3 ms-3 text-black sing-Out">
       SingOut
       </p>
      
      </>:

        <Nav.Link as={Link} to="/login" className='ms-3'>
              Login
            </Nav.Link>}
      </Container>
    </Navbar>
        </div>
    );
};

export default Navber2;