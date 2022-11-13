import React from 'react';
import Navber from '../Navber/Navber';
import Navber2 from '../Navber/Navber2';
import './Header.css'

const Header = ({carts, setCarts}) => {
    return (
        <div className='container navbar-section'>
               <Navber2 carts={carts} setCarts={setCarts}></Navber2>
            <Navber></Navber>
        </div>
    );
};

export default Header;