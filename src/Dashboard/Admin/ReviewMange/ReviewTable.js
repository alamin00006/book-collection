import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import DeleteIcon from '../../../svgIcons/DeleteIcon';
import DetailsIcon from '../../../svgIcons/DetailsIcon';

import ReviewStatusUpdate from './ReviewStatusUpdate';
import SeeReviewDetails from './SeeReviewDetails';
// import './ProductTable.css'

const ReviewTable = ({refetch, review, index, setReviewDelete, reviewDelete}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
const handleReviewDelete = async()=>{

    try{
        const data = await axios.delete(`http://localhost:5000/api/v1/review/${reviewDelete?._id}`,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      refetch()
        toast.success(data?.data?.message)
         
       }catch(error){
        return toast.error(error.response.data.message)
       }
      
}


    return (
        <tr>
        <td>{index+1}</td>
        <td>{review?.name}</td>
        <td className='text-center'>{review?.rating}</td>
        <td>
             <div>
                    <div>
                            <h6 className={`${review?.status === "Approved"?"order-status":'text-danger fw-bold'}`}>{review?.status}</h6>
                        <ReviewStatusUpdate review={review} refetch={refetch}/>
                    </div>
             </div>
        </td>
        <td className='text-center'>
            
            <div>
                <Button className='details-icon' onClick={handleShow} >
                    <span>
                    <DetailsIcon/>
                    </span>
                </Button>
                  
                <SeeReviewDetails review={review} setShow={setShow} show={show}/>
                </div>
            </td>
        <td>
            <div>
                 
                    <div onClick={setReviewDelete(review)} className='ms-5'>
                    <span onClick={handleReviewDelete} className='delete-icon'>
                    <DeleteIcon/>
                    </span>
                        
                    </div>
            </div>
        </td>
       
        </tr>
      
    );
};

export default ReviewTable;