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
const Reviews = ({singleProduct3}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const stars = Array(5).fill(0)

    const [reviews, setReview] = useState([]);
    // const [filterReviews, setFilterReviews] = useState([]);

const { isLoading, refetch} = useQuery(['',singleProduct3 ], () => fetch(`http://localhost:5000/api/v1/review`, {
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
       <div>
        {
          productReviews.map(pReview => <div key={pReview._id}>
            <span>
            {pReview?.rating===5?
            <>
                 <StarIcon className='starIcon-5'/>
                 <StarIcon className='starIcon-5'/>
                 <StarIcon className='starIcon-5'/>
                 <StarIcon className='starIcon-5'/>
                 <StarIcon className='starIcon-5'/>
            </>:''}
            {pReview?.rating===4?
            <>
                 <StarIcon className='starIcon-4'/>
                 <StarIcon className='starIcon-4'/>
                 <StarIcon className='starIcon-4'/>
                 <StarIcon className='starIcon-4'/>
                 <StarIcon className='starIcon-4-count'/>
            </>:''}
            {pReview?.rating===3?
            <>
                 <StarIcon className='starIcon-3'/>
                 <StarIcon className='starIcon-3'/>
                 <StarIcon className='starIcon-3'/>
                 <StarIcon className='starIcon-3-count'/>
                 <StarIcon className='starIcon-3-count'/>
            </>:''}
            {pReview?.rating===2?
            <>
                 <StarIcon className='starIcon-2'/>
                 <StarIcon className='starIcon-2'/>
                 <StarIcon className='starIcon-2-count'/>
                 <StarIcon className='starIcon-2-count'/>
                 <StarIcon className='starIcon-2-count'/>
            </>:''}
            {pReview?.rating===1?
            <>
                 <StarIcon className='starIcon-1'/>
                 <StarIcon className='starIcon-1-count'/>
                 <StarIcon className='starIcon-1-count'/>
                 <StarIcon className='starIcon-1-count'/>
                 <StarIcon className='starIcon-1-count'/>
            </>:''}

            </span>
            <span>
                {pReview.comment}
            </span>
          </div>)
        }
            <div style={styles.stars}>
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
    <div>
       <div>
           <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Your Name" required/>
       </div>
         <div>
            <textarea onChange={(e)=>setComment(e.target.value)}
            placeholder="What's your experience?"
            style={styles.textarea}
          />
         </div>
         <div>
            <button onClick={handleReviewSubmit}
            style={styles.button}
          >
            Submit
          </button>
         </div>
    </div>

     
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
        // border: "1px solid #a9a9a9",
        // borderRadius: 5,
        // padding: 10,
        // margin: "20px 0",
        // minHeight: 100,
        // width: 300
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
       
      } 
  } 
export default Reviews;