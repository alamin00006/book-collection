import React from 'react';
import author from '../../Images/author.jpg'
const Product3Author = () => {
    return (
        <div className='d-flex mt-3 align-items-center'>
            <div>
                <img src={author} alt='Author'/>
            </div>
            <div>
                <h3 className='ms-3'>প্রফেসরস সম্পাদনা পরিষদ</h3>
            </div>
        </div>
    );
};

export default Product3Author;