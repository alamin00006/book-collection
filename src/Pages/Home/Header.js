import React from 'react';
import Navber from '../Navber/Navber';
import Navber2 from '../Navber/Navber2';
import './Header.css'

const Header = ({handleIslamicBook}) => {
    return (
        <div className='container navbar-section'>
               <Navber2></Navber2>
            <Navber handleIslamicBook={handleIslamicBook}></Navber>
        </div>
    );
};

export default Header;