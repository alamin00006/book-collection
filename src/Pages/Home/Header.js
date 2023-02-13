import React from 'react';
import Navber from '../Navber/Navber';
import Navber2 from '../Navber/Navber2';
import './Header.css'

const Header = ({handleIslamicBook}) => {
    return (
        <div className=''>
               <div className='first-navbar navbar-section'>
                    <Navber2></Navber2>
               </div>
             <div className='second-navbar'>
                  <Navber handleIslamicBook={handleIslamicBook}></Navber>
             </div>
        </div>
    );
};

export default Header;