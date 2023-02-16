
import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Publication = () => {

   const handlePublicationAdd = async(e)=>{

    e.preventDefault(); 
    const publicationAdd = {
        name:e.target.publicationName.value,
    }
   

    try{
        const data = await axios.post('http://localhost:5000/api/v1/publication',publicationAdd);
        
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
              <h2 className='text-center p-5 text-white'>Publication Add</h2>
            <form onSubmit={handlePublicationAdd} className='category-form'>
                 <div className=''>
                   
                       <div>
                         <input style={{width:"100%", height:'60px', border:'1px solid gray'}} type="text" name='publicationName' className='rounded fs-5' placeholder='Enter Publication Name in Bangla' />
                        <input style={{width:"100%", height:'60px'}} className='product-info-add rounded text-white fw-bolder fs-5 mt-1' type="submit" value='Publication Add'/>
                       </div>
                    
                 </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Publication;