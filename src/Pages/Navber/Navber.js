import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useCategories from '../../Hooks/useCategories';
import '../Navber/Navber.css'

const Navber = ({handleIslamicBook}) => {
    const [categories] = useCategories();

    return (
            <div className='container'>
               
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
               <a class="navbar-brand text-white" href="..">হোম</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
            <div class="collapse navbar-collapse" id="main_nav">
               <ul class="navbar-nav">
               <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">লেখক</a>
                     <div className='dropdown-menu'>
                  <div className='drop-list-1'>
                  <div class="d-flex">
                        <ul>
                        {
                           categories?.data?.slice(0,8).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(8,15).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(15,22).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(22,28).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(28,34).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        <li><a className='dropdown-item' href='...'>আরো দেখুন...</a></li>
                     </ul>
                  
                  
                  
                  
                     </div>
                  </div>
                  
                  </div>
                  
                  </li>
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">বিষয়</a>
                     <div className='dropdown-menu'>
                  <div className='drop-list'>
                  <div class="d-flex">
                  <ul>
                        {
                           categories?.data?.slice(0,8).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(8,15).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(15,22).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(22,28).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(28,34).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        <li><Link to="/category" className='dropdown-item'>আরো দেখুন...</Link></li>
                     </ul>
                  
                  
                  
                  
                     </div>
                  </div>
                  
                  </div>
                  
                  </li>
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 dropdown-toggle pb-4" href="..">প্রকাশনী</a>
                     <div className='dropdown-menu'>
                  <div className='drop-list-3'>
                  <div class="d-flex">
                  <ul>
                        {
                           categories?.data?.slice(0,7).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(7,14).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(14,21).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(21,27).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        
                     </ul>
                        <ul>
                        {
                           categories?.data?.slice(27,33).map(category => <li><a class="dropdown-item" href=".."> 
                           {category.name}
                           </a></li>)
                        }
                        <li><a className='dropdown-item' href='...'>আরো দেখুন...</a></li>
                     </ul>
                  
                  
                     </div>
                  </div>
                  
                  </div>
                  
                  </li>
                  
                  
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 pb-4 dropdown-toggle" href="..">বইমেলা</a>
                     <div class="dropdown-menu">
                     <ul>
                        <li><a class="dropdown-item" href=".."> বইমেলা 2023</a></li>
                                       
                     </ul>
                  
                     </div>
                     </li>
               
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 pb-4 text-white" href="..">উপন্যাস</a>
                     </li>
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 pb-4 text-white" href="..">বেস্টসেলার বই</a>
                     </li>
                     <li class="nav-item dropdown">
                     <a class="subject-link subject-link2 pb-4 text-white" href="..">ইঞ্জিনিয়ারিং</a>
                     </li>
               </ul>
               <ul class="navbar-nav ms-auto">
                  <li class="nav-item"><a class="nav-link text-white" href=".."> ইসলামিক বই </a></li>
                  <li class="nav-item"><a class="nav-link text-white" href=".."> প্রি-অর্ডার </a></li>
                  <li class="nav-item"><a class="nav-link text-white" href=".."> অতিরিক্ত ছাড়ের বই </a></li>
               
               </ul>
            </div> 
            </div> 
            </nav>

            </div>
       
    );
};

export default Navber;