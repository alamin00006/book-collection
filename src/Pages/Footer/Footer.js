import React from 'react';
import logo from '../../Images/booklogo.jpg'
import '../Footer/Footer.css'

const Footer = () => {
    return (
       <div className='container'>
         <div className='row mt-5'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div>
                    <img className='logo' src={logo} alt=''/>
                </div>
                <p>01749718743</p>
                <p>mohammadalamin1090@gmail.com</p>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <h3> GET TO KNOW US </h3>
                <ul>  
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>Contact us</a></li>
                    <li><a href=''>Term and conditions</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <h3>POLICY</h3>

                <ul>
                    <li><a href=''>My account</a></li>
                    <li><a href=''>Account details</a></li>
                    <li><a href=''>My Orders</a></li>
                    <li><a href=''>My Cart</a></li>
                    <li><a href=''>Go to Shop</a></li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <h3>Stay Connected With Us</h3>
                <div className='social-media'>
                   <h6><a href=''> Facebook</a></h6>
                   <h6><a href=''> Lnkedin</a></h6>
                   <h6><a href=''> Twitter</a></h6>
                    
                 
                </div>
            </div>
           
        </div>
        <div className='text-center'>
        <span>&copy; Copyright 2022 <b>Boi Collection</b> All rights reserved | Developed by : Mohammad Al Amin</span>
        </div>
       </div>
    );
};

export default Footer;