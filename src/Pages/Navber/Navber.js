import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Navber/Navber.css'

const Navber = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className='bg-light' variant="dark">
      <Container>
        <NavLink className='text-black book-collection' to="/">বই</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='text-black book-collection' to="/PreOrder">প্রি-অর্ডার</NavLink>
            <NavLink className='text-black book-collection' to="/Engineering">ইঞ্জিনিয়ারিং</NavLink>
            <NavLink className='text-black book-collection' to='/islamicBook'>ইসলামি বই</NavLink>
            <NavLink className='text-black book-collection' to="/English">ইংলিশ</NavLink>
            <NavLink className='text-black book-collection' to='/AdmissionGuide'>এডমিশন গাইড</NavLink>
            <NavLink className='text-black book-collection' to="/ComputerProgramming">কম্পিউটার প্রোগ্রামিং</NavLink>
            <NavLink className='text-black book-collection' to="/EngineeringJob">ইঞ্জিনিয়ারিং চাকরি প্রস্তুতি
            </NavLink>
            <NavLink className='text-black book-collection' to="/General">সাধারণ জ্ঞান</NavLink>
            <NavLink className='text-black book-collection' to="/MarketingSaling">মার্কেটিং ও সেলিং</NavLink>
            <NavLink className='text-black book-collection' to="/EducationResearch">শিক্ষা ও গবেষণা</NavLink>
            
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>    


        </div>
    );
};

export default Navber;