
import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const BookFair = () => {

   const handleBookFairAdd = async(e)=>{

    e.preventDefault(); 
    const bookFairAdd = {
      bookFairYear:e.target.bookFairYear.value,
    }
   

    try{
        const data = await axios.post('http://localhost:5000/api/v1/book-fair',bookFairAdd);
        
        if(data.status===400){
          return toast.error(data.data.error)
        }
        toast.success(data.data.message)
         
       }catch(error){
        return toast.error(error)
       }
         
      e.target.reset()
   }



    return (
        <div className='product-info '>
              <h2 className='text-center p-5 bg-danger text-white'>Book Fair Year Add</h2>
            <form onSubmit={handleBookFairAdd} className='category-form'>
                 <div className=''>
                   
                       <div>
                         <input style={{width:"100%", height:'60px', border:'1px solid gray'}} type="text" name='bookFairYear' className='rounded fs-5' placeholder='Enter Book Fair Year' />
                        <input style={{width:"100%", height:'60px'}} className='bg-warning rounded text-white fw-bolder fs-5 mt-1' type="submit" value='Book Fair Add'/>
                       </div>
                    
                 </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default BookFair;