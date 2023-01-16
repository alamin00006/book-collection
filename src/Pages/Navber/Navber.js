import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Navber/Navber.css'

const Navber = ({handleIslamicBook}) => {
  
    return (
        <div>
        {/* <Navbar collapseOnSelect expand="lg" className='bg-light' variant="dark">
      <Container>
        <NavLink className='text-black book-collection' to="/">বই</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='text-black book-collection' to="/PreOrder">প্রি-অর্ডার</NavLink>
            <NavLink className='text-black book-collection' to="/Engineering">ইঞ্জিনিয়ারিং</NavLink>
            <NavLink onClick={() =>handleIslamicBook('Islamic Book')} className='text-black book-collection' to='/islamicBook'>ইসলামি বই</NavLink>
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
    </Navbar>     */}

<div class="">


<nav class="navbar navbar-expand-lg  bg-warning">
 <div class="container-fluid">
 	 <a class="navbar-brand" href="..">হোম</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="main_nav">
	<ul class="navbar-nav">
			<li class="nav-item dropdown">
			<a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">লেখক</a>
		    <div className='dropdown-menu'>
        <div class="d-flex">
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
		    </div>
		  
        </div>
		  
		</li>
			<li class="nav-item dropdown">
			<a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">বিষয়</a>
		    <div className='dropdown-menu'>
        <div class="d-flex">
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
			    <ul>
              <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
              <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
          </ul>
		    </div>
		  
        </div>
		  
		</li>
			<li class="nav-item dropdown">
			<a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">প্রকাশনী</a>
		    <ul class="dropdown-menu">
			  <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
			  <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
		    </ul>
		</li>
			<li class="nav-item dropdown">
			<a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">বইমেলা</a>
		    <ul class="dropdown-menu">
			  <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
			  <li><a class="dropdown-item" href=".."> Submenu item 3 </a></li>
		    </ul>
		</li>
	</ul>
	<ul class="navbar-nav ms-auto">
		<li class="nav-item"><a class="nav-link" href=".."> Menu item </a></li>
		<li class="nav-item"><a class="nav-link" href=".."> Menu item </a></li>
		<li class="nav-item dropdown">
			<a class="nav-link  dropdown-toggle" href=".." data-bs-toggle="dropdown"> Dropdown right </a>
		    <ul class="dropdown-menu dropdown-menu-end">
			  <li><a class="dropdown-item" href=".."> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href=".."> Submenu item 2 </a></li>
		    </ul>
		</li>
	</ul>
  </div> 
 </div> 
</nav>



</div>
        </div>
    );
};

export default Navber;