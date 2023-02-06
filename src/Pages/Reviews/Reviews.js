import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { useQuery } from 'react-query';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
const Reviews = ({singleProduct3}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [comment, setComment] = useState('');
    const stars = Array(5).fill(0)

    const [reviews, setReview] = useState([]);

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
  // setReview(data.data)
  console.log(data.data)
  
}))


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
      rating:currentValue,
      comment:comment
    }
    // console.log(reviewData)
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



    return (
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
        <textarea onChange={(e)=>setComment(e.target.value)}
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button onClick={handleReviewSubmit}
        style={styles.button}
      >
        Submit
      </button>
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
        margin: "20px 0",
        minHeight: 100,
        width: 300
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
      } 
  } 
export default Reviews;