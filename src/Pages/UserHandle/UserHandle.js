import React from 'react';
import { Link } from 'react-router-dom';

const UserHandle = () => {
    return (
        <div className='container'>
           <h5 className='text-center bg-warning text-white p-5'>Are You Buy Product Please Before <Link to='/login'>Login</Link></h5>
        </div>
    );
};

export default UserHandle;