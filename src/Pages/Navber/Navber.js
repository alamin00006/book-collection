import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navber/Navber.css'

const Navber = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className='bg-light' variant="dark">
      <Container>
        <Navbar.Brand className='text-black book-collection' as={Link} to="/book">বই</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-black book-collection' as={Link} to="/PreOrder">প্রি-অর্ডার</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/Engineering">ইঞ্জিনিয়ারিং</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/English">ইংলিশ</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to='/islamicBook'>ইসলামি বই</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to='/AdmissionGuide'>এডমিশন গাইড</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/ComputerProgramming">কম্পিউটার প্রোগ্রামিং</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/EngineeringJob">ইঞ্জিনিয়ারিং চাকরি প্রস্তুতি
            </Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/General">সাধারণ জ্ঞান</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/MarketingSaling">মার্কেটিং ও সেলিং</Nav.Link>
            <Nav.Link className='text-black book-collection' as={Link} to="/EducationResearch">শিক্ষা ও গবেষণা</Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>    


        </div>
    );
};

export default Navber;