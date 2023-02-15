import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/booklogo.jpg'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import '../Navber/Navber2.css'
import { Link, useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';
import useUser from '../../Hooks/useUser';

const Navber2 = () => {
  // const token = localStorage.getItem("token");
 

  const [user] = useUser()

  // refetch()
 
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()

  // const SingOutHandle = ()=>{
  
  //   navigate('/')
  //   localStorage.removeItem('accessToken');
  //   window.location.reload(false);
    
  
  // }

    return (
        <div className='container'>
          <Navbar className='' expand="lg">
      <Container fluid>
       <Link to='/'><img className='logo' src={logo} alt=''/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex search-field">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='text-white search-button'>Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav.Link className='ms-5 text-decoration-none text-white' as={Link} to="/cart">
          <ShoppingCartIcon className='add-to-icon1'/>{cart?.cartItems?.length}
            </Nav.Link>
           
             
            {user?.email?<>
            
       {/* <p className="mt-3 ms-3 text-black sing-Out">
          <Link onClick={SingOutHandle} to="">Sign Out</Link>
       </p> */}
       <p className="mt-3 ms-3 text-black sing-Out ">
          <Link className='text-white' to="/side-navbar">আমার একাউন্ট</Link>
       </p>
      
      </>:
              
        <Nav.Link as={Link} to="/login" className='ms-3 text-white'>
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