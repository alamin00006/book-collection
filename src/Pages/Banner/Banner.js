import React from 'react';
import banner from '../../Images/banner.jpg'
import '../Banner/Banner.css'


const Banner = () => {
    return (
        <div className='container'>
            <img src={banner} alt='banner'/>

        </div>
    );
};

export default Banner;