import React from 'react';
import Navber from '../Navber/Navber';
import Navber2 from '../Navber/Navber2';

const Home = () => {
    return (
        <div className='container'>
            <Navber2></Navber2>
            <Navber></Navber>
        </div>
    );
};

export default Home;