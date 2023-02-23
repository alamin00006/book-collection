import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useProduct3 from '../../Hooks/UseProduct3';
import Cart from '../AddToCart/Cart';

const Product3AllDetails = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [weekSales,setWeekSale] = useState([]);
  
    const { isLoading, refetch} = useQuery(['weekSales',page], () => fetch(`http://localhost:5000/api/v1/product?BookSalesInfo=এই সপ্তাহের বেস্ট সেল বুক&page=${page}&size=${2}& `, {
        method: "GET",
    }).then(res =>res.json())
    .then(data =>{
        setWeekSale(data?.data)
        console.log(data?.data?.products)
        const totalPageCount = Math.ceil(data?.data?.weeksProductTotalCount/2);
       setPageCount(totalPageCount)
   
    }))



//   const [myProducts3] = useProduct3();
//   const [weekSales, setWeekSale] = useState([])
  
//   useEffect(()=>{
//       const weekBestSales = myProducts3?.data?.filter(weekSale =>weekSale?.BookSalesInfo==='এই সপ্তাহের বেস্ট সেল বুক')
//       setWeekSale(weekBestSales)
//   },[myProducts3])
//   console.log(weekSales)

    return (
        <div className='bg-white'>
        <div className='container border'>
        <h4 className='bg-white p-3'>এই সপ্তাহের বেস্টসেলার বইসমূহ</h4>
        {/* <h4 className='bg-white p-3'>{categoryDetails.name} বইসমূহ</h4> */}
             <div className='bg-dark text-white d-flex justify-content-center align-items-center rounded'>
             <div className='p-5'>
                    {/* <h2>{categoryDetails.name}</h2> */}
                     {weekSales?.products?.length > 0? <>
                        <h4> মোট {weekSales?.weeksProductTotalCount} টি বই পাওয়া গেছে</h4>
                    </>:<h4> কোন বই খুঁজে পাওয়া যায়নি</h4>}
                 </div>
             </div>
          

             
        <div className='my-card-main my-card mt-2'>
            {
                    weekSales?.products?.map((data, index)=> <Cart key={data._id} data={data}></Cart >) 
                }

            </div> 
            <div className='pagination d-flex justify-content-end'>
     {
        [...Array(pageCount).keys()].map((number,index) =><div key={index}>
          <button
           onClick={()=>setPage(number)}
           className={page===number?'page-selected':''}>
            {number+1}</button>
        </div>)
           
      }
     </div>
           </div>
           </div>

      
    );
};
   
export default Product3AllDetails;