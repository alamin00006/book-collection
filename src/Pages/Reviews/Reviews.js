import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { useQuery } from 'react-query';
import { StarIcon } from '@heroicons/react/24/solid'
import './Reviews.css'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
const Reviews = ({singleProduct3,reviews, setReview}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const stars = Array(5).fill(0)

    // const [reviews, setReview] = useState([]);
    // const [filterReviews, setFilterReviews] = useState([]);

const { isLoading, refetch} = useQuery([singleProduct3 ], () => fetch(`http://localhost:5000/api/v1/review`, {
    method: "GET",
 
}).then(res =>{
  if(res.status ===401 || res.status === 403){
            // Navigate('/');
            // signOut(auth);
            // localStorage.removeItem('accessToken')
            }
         return res.json()
})
.then(data =>{
  setReview(data.data)
  // console.log(data.data)
  
}))
const productReviews = reviews.filter(pReview =>pReview.forProduct===singleProduct3?._id)
// console.log(productReviews)
    const handleClick = value => {
      setCurrentValue(value)
      // console.log(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }


    const handleReviewSubmit = async() =>{
    const reviewData = {
      forProduct:singleProduct3._id,
      rating:currentValue||hoverValue,
      comment:comment,
      name:name
    }
    console.log(reviewData)
      try{
        const data = await axios.post('http://localhost:5000/api/v1/review',reviewData);
        
        if(data.status===400){
          // return toast.error(data.data.error)
        }
        
        // toast.success(data.data.message)
         
       }catch(error){
        // return(error.message)
       }
         
      // e.target.reset()
    }

    refetch()

    return (
       <div className='row'>
       
        <div className='col-lg-6 col-md-6 col-sm-12'>
        {
          productReviews.map(pReview => <div key={pReview._id} className="mt-4">
            <span>
            {pReview?.rating===5?
            <>   <span>পর্যালোচনা লিখেছেন {pReview?.name}</span> 
                 <div>
                    <StarIcon className='starIcon-5'/>
                    <StarIcon className='starIcon-5'/>
                    <StarIcon className='starIcon-5'/>
                    <StarIcon className='starIcon-5'/>
                    <StarIcon className='starIcon-5'/>
                 </div>
            </>:''}
            {pReview?.rating===4?
            <>   <span>পর্যালোচনা লিখেছেন {pReview?.name}</span> 
                 <div>
                  <StarIcon className='starIcon-4'/>
                  <StarIcon className='starIcon-4'/>
                  <StarIcon className='starIcon-4'/>
                  <StarIcon className='starIcon-4'/>
                  <StarIcon className='starIcon-4-count'/>
                 </div>
            </>:''}
            {pReview?.rating===3?
            <>    <span>পর্যালোচনা লিখেছেন {pReview?.name}</span> 
                   <div>
                      <StarIcon className='starIcon-3'/>
                      <StarIcon className='starIcon-3'/>
                      <StarIcon className='starIcon-3'/>
                      <StarIcon className='starIcon-3-count'/>
                      <StarIcon className='starIcon-3-count'/>
                   </div>
            </>:''}
            {pReview?.rating===2?
            <>  <span>পর্যালোচনা লিখেছেন {pReview?.name}</span> 
                   <div>
                      <StarIcon className='starIcon-2'/>
                      <StarIcon className='starIcon-2'/>
                      <StarIcon className='starIcon-2-count'/>
                      <StarIcon className='starIcon-2-count'/>
                      <StarIcon className='starIcon-2-count'/>
                   </div>
            </>:''}
            {pReview?.rating===1?
            <>    <span>পর্যালোচনা লিখেছেন {pReview?.name}</span> 
                  <div>
                      <StarIcon className='starIcon-1'/>
                      <StarIcon className='starIcon-1-count'/>
                      <StarIcon className='starIcon-1-count'/>
                      <StarIcon className='starIcon-1-count'/>
                      <StarIcon className='starIcon-1-count'/>
                  </div>
            </>:''}

            </span>
             <div>
                <span>
                    {pReview.comment}
                </span>
             </div>
          </div>)
        }
         
          <p className="mt-5">রিভিউ লিখুন</p>
           <div className='d-flex align-items-center'>
           <div>রেটিং নির্বাচন করুন</div>
            <div style={styles.stars} className="ms-2">
               
              {
                stars.map((_,index) =>{
                  return(
                    <FaStar 
                    key={index}
                    size={20}
                    style={{
                      marginRight:10,
                      cursor:"pointer"
                    }} 
                    color={(hoverValue || currentValue)> index ? colors.orange:colors.grey}
                    onClick={() =>handleClick(index+1)}
                    onMouseOver={() =>handleMouseOver(index+1)}
                    onMouseLeave={() =>handleMouseLeave} />
                  )
                })
              }
              </div>
           </div>
    <div>
       <div className='mt-3'>
       <div>
           <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Your Name" required style={styles.input}/>
       </div>
         <div>
            <textarea onChange={(e)=>setComment(e.target.value)}
            placeholder="What's your experience?"
            style={styles.textarea}
          />
         </div>
         <div className='d-flex justify-content-end'>
            <button onClick={handleReviewSubmit}
            style={styles.button}
          >
            Submit
          </button>
         </div>
       </div>
    </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
             
        </div>
</div>
    
    );
};
const styles ={
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "5px 0",
        width: '100%'
      },
      input:{
        width:'100%'
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        backgroundColor:'#000',
        color:'white',
        padding:'2px 15px',
        fontWeight:700
      } 
  } 
export default Reviews;