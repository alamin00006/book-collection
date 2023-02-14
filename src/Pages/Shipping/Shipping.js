import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipping.css'
import cod from '../../Images/cod.png'
import bkash from '../../Images/bkash.png'
import nagad from '../../Images/Nagad-Logo.png'
import Loading from '../Loading/Loading';
import { allRemoveFromCart, getTotals } from '../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import useUser from '../../Hooks/useUser';

const Shipping = () => {

  const [user,refetch] = useUser()
  const dispatch = useDispatch()
  // const [district, setDistrict] = useState('')
    let cart = useSelector((state) => state.cart);
    
    const{cartTotalAmount}=useSelector((state) => state.cart)
   
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
    let shipping = 50;
    const finalCartAmount = shipping + cartTotalAmount;

  const [showCashOn, setShowCashOn]= useState(true);
  const [showBkash, setShowBkash]= useState(false);
  const [showNagad, setShowNagad]= useState(false);

  const [isActive1, setIsActive1]= useState(true);
  const [isActive2, setIsActive2]= useState(false);
  const [isActive3, setIsActive3]= useState(false);

  let toggleClassCheck1 = isActive1 ?'active':'';
  let toggleClassCheck2 = isActive2 ?'active':'';
  let toggleClassCheck3 = isActive3 ?'active':'';
  const navigate = useNavigate()

  const AllOrder = async(e)=>{
 
  e.preventDefault()
 if(cart?.cartItems?.length===0){
  return toast.warning('Sorry Your Cart Is Empty');
 }
  if(!user?.email){
    return toast.warning('Please Login');;
 }
const name =  e.target?.name?.value;
const email =  e.target?.email?.value;
const phone =  e.target?.phone?.value;
const country =  e.target?.country?.value;
const city =  e.target?.city?.value;
const zip =  e.target?.zip?.value;
const address =  e.target?.address?.value;
const district =  e.target?.district?.value;
const paymentType =  e.target?.payment?.value;
const bkashNumber =  e.target?.bkashNumber?.value;
const bkashTrx =  e.target?.bkashTrx?.value;
const nagadNumber =  e.target?.nagadNumber?.value;
const nagadTrx =  e.target?.nagadTrx?.value;

if(district==='Select Your District'){
return toast.error('Please Select Your District');
}
 
  const orderData = {
    orderItems:cart, 
    user:user?.email,
    name:name,
    email:email,
    phone:phone,
    country:country,
    city:city,
    zip:zip,
    address:address,
    district:district,
    paymentType:paymentType,
    bkashNumber:bkashNumber,
    bkashTrx:bkashTrx,
    nagadNumber:nagadNumber,
    nagadTrx:nagadTrx,
  
  };
  
  try{
    const data = await axios.post('http://localhost:5000/api/v1/order',orderData);
    
    if(data.status===400){
      return toast.error(data.data.error)
    }
    //  toast.success(data.data.message)
     navigate('/side-navbar/order')
     localStorage.removeItem('cartItems')
     window.location.reload(false);
     
     
   }catch(error){
    console.log(error)
   }
     
  // e.target.reset()




  // fetch(`http://localhost:5000/api/v1/order`, {
  // method: 'POST',
  // headers:{
  //   'content-type': 'application/json',
   
  // },
  // body: JSON.stringify(orderData)
  // })
  // .then(res => res.json()
  // )
  // .then(data => {
  //     // navigate('/order')
  //     localStorage.removeItem('cartItems')
  //     // window.location.reload(false);
  // })
  } 

    return (
      <div className='bg-white'>
         <div className='container'>
   <div class=" row">
        <div className='col-lg-8 shipping-address p-5 bg-white'>
          <form onSubmit={AllOrder}>
          
            <div className="">
              <div >
                <h3>Shipping Address</h3>
                <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12'>
                 <label for="name"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" required id="name" defaultValue={user?.name} name="name" placeholder="Your Name"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="email"><i class="fa fa-envelope"></i>Email</label>
                <input type="email" required id="email" defaultValue={user?.email} name="email" placeholder="Your Email"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="phone"><i class="fa fa-envelope"></i> Phone No</label>
                <input type="text" required id="phone" name="phone" placeholder="Phone Number"/>
                 </div>
                   <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="country"><i class="fa fa-institution"></i> Country</label>
                <input type="text" required id="country" name="country" disabled value="Bangladesh" placeholder="Bangladesh"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
               
               <label for="district"><span className='mr-3'>District:</span> </label>
               <select style={{width:"100%", height:'45px'}} name='district' required id='district'>
                 <option>Select Your District</option>
                 <option>Barguna</option>
                 <option>Barishal</option>
                 <option>Bhola</option>
                 <option>Jhalokati</option>
                 <option>Patuakhali</option>
                 <option>Pirojpur</option>
                 <option>Bandarban</option>
                 <option>Brahmanbaria</option>
                 <option>Chandpur</option>
                 <option>Chattogram</option>
                 <option>Cumilla</option>
                 <option>Cox's Bazar</option>
                 <option>Khagrachhari</option>
                 <option>Lakshmipur</option>
                 <option>Noakhali</option>
                 <option>Rangamati</option>
                 <option>Dhaka</option>
                 <option>Faridpur</option>
                 <option>Gazipur</option>
                 <option>Gopalganj</option>
                 <option>Kishoreganj</option>
                 <option>Madaripur</option>
                 <option>Manikganj</option>
                 <option>Munshiganj</option>
                 <option>Narayanganj</option>
                 <option>Narsingdi</option>
                 <option>Rajbari</option>
                 <option>Shariatpur</option>
                 <option>Tangail</option>
                 <option>Bagerhat</option>
                 <option>Chuadanga</option>
                 <option>Jashore</option>
                 <option>Jhenaidah</option>
                 <option>Khulna</option>
                 <option>Kushtia</option>
                 <option>Magura</option>
                 <option>Meherpur</option>
                 <option>Narail</option>
                 <option>Satkhira</option>
                 <option>Jamalpur</option>
                 <option>Mymensingh</option>
                 <option>Netrokona</option>
                 <option>Sherpur</option>
                 <option>Bogura</option>
                 <option>Joypurhat</option>
                 <option>Naogaon</option>
                 <option>Natore</option>
                 <option>Chapai Nawabganj</option>
                 <option>Pabna</option>
                 <option>Rajshahi</option>
                 <option>Sirajganj</option>
                 <option>Dinajpur</option>
                 <option>Gaibandha</option>
                 <option>Kurigram</option>
                 <option>Lalmonirhat</option>
                 <option>Nilphamari</option>
                 <option>Panchagarh</option>
                 <option>Rangpur</option>
                 <option>Thakurgaon</option>
                 <option>Habiganj</option>
                 <option>Moulvibazar</option>
                 <option>Sunamganj</option>
                 <option>Sylhet</option>
               </select>
             </div>
                
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" required id="country" name="city" placeholder="City"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="zip"><i class="fa fa-institution"></i> Post Code / Zip Code</label>
                <input type="text" required id="zip" name="zip" placeholder="Post Code / Zip Code"/>
                 </div>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                   <p><label for="address">Address</label></p>
                   <textarea id='address' required name='address' className='rounded' rows="4" cols="87"></textarea>
                  </div>
                </div>
                </div>
     
            </div>
            
          
          <h3>Payment Method</h3>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='cash-on cash-on-delivery d-flex align-items-center' >
          <div onClick={() =>{
          return(
            setShowCashOn(true),
            setShowBkash(false),
            setShowNagad(false),
            setIsActive1(true),
            setIsActive2(false),
            setIsActive3(false)
          )
        }} className={`mb-3  ${toggleClassCheck1}`}>
            <input id='cash-on-delivery' style={{height:'25px', width:'25px'}} className='radio-button' defaultChecked type='radio' name='payment' value='Cash on Delivery' 
            
            />
          </div>
        <label for='cash-on-delivery'>
        <div className='ms-3 d-flex align-items-center'>
          <div>
            <img src={cod} alt=''/>
            </div>
              <div>
              <h6 className='ms-3 text-black'>Cash on Delivery</h6>
              </div>
          </div>
        </label>
        </div>
          {
          showCashOn? <div>
          <h6>পণ্য ডেলিভারির পরে নগদ টাকা দিতে হবে।</h6>
          </div>:null
          }
        </div>
      <div className='col-lg-12 col-md-12 col-sm-12'>
      <div className='bkash mobile-payment d-flex align-items-center' >
    <div onClick={() =>{
    return(
      setShowCashOn(false),
      setShowBkash(true),
      setShowNagad(false),
      setIsActive1(false),
      setIsActive2(true),
      setIsActive3(false)
    
    )
  }} className={`mb-4 ${toggleClassCheck2}`}>
      <input id='bkash' style={{height:'25px', width:'25px'}} className='radio-button' type='radio' name='payment' value="bkash"/>
      
    </div>
    <label for='bkash' className='ms-3'>
    <div>
      <img src={bkash} alt=''/>
    </div>
  
    </label>
  </div>
      {
      showBkash?<div>
      <p>
      দয়া করে প্রথমে পেমেন্ট সম্পন্ন করে নিচের ফরম পূরণ পূর্বক আপনার অর্ডার প্লেস করুন।
      </p>
      <p>
      নিচের বিকাশ পারসোনাল নাম্বারে টোটাল চার্জ সেন্ড মানি করুণ। এরপর যে বিকাশ নাম্বার থেকে ট্রানজেকশনটি করা হয়েছে সেটি ও ট্রানজেকশন নাম্বার/আইডিটি নিচের ঘরে সংযুক্ত করুন।
      </p>
      <p>
      bKash Personal Number : 01622738449
      </p>
      <div className='d-flex align-items-center'>
          <div>
              <label>Bkash Number</label>
          </div>
          <div>
              <input className='ms-3 bkash-info-input' name='bkashNumber' required type='text' placeholder='017xxxxxxxxxxx'/>
          </div>
      </div>
      <div className='d-flex align-items-center'>
          <div>
              <label>bKash Tranx ID	</label>
          </div>
          <div>
              <input className='ms-3 mt-1 bkash-info-input' name='bkashTrx' required type='text' placeholder='8N6MM9REN'/>
          </div>
      </div>
      
      </div>:null
      }
</div>
    <div className='col-lg-12 col-md-12 col-sm-12' >
        <div className='nagad mobile-payment d-flex align-items-center' >
      <div onClick={() =>{
      return(
        setShowCashOn(false),
        setShowBkash(false),
        setShowNagad(true),
        setIsActive1(false),
        setIsActive2(false),
        setIsActive3(true)
        
      )
    }}  className={`mb-4 ${toggleClassCheck3}`}>
        
        <input id='nagad' style={{height:'25px', width:'25px'}} className='radio-button' type='radio' name='payment' value="nagad"/>
      </div>
      <label for='nagad' className='ms-3'>
      <div>
       <img src={nagad} alt=''/>
      </div>
    
      </label>
    </div>
    {
     showNagad? <div>
        <p>
        দয়া করে প্রথমে পেমেন্ট সম্পন্ন করে নিচের ফরম পূরণ পূর্বক আপনার অর্ডার প্লেস করুন।
        </p>
        <p>
        নিচের নগদ পারসোনাল নাম্বারে টোটাল চার্জ সেন্ড মানি করুণ। এরপর যে নগদ নাম্বার থেকে ট্রানজেকশনটি করা হয়েছে সেটি ও ট্রানজেকশন নাম্বার/আইডিটি নিচের ঘরে সংযুক্ত করুন।
        </p>
        <p>
        Nagad Personal Number : 01622738449
        </p>
        <div className='d-flex align-items-center'>
            <div>
                <label>Nagad Number</label>
            </div>
            <div>
                <input className='ms-3 bkash-info-input' name='nagadNumber' required type='text' placeholder='017xxxxxxxxxxx'/>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div>
                <label>Nagad Tranx ID	</label>
            </div>
            <div>
                <input className='ms-3 mt-1 bkash-info-input' name='nagadTrx' required type='text' placeholder='8N6MM9REN'/>
            </div>
        </div>
        
        </div>:null}
  </div>
  
  </div>
  <div className='text-center checkout-button mt-3 rounded'>
 <input className='order-button text-white fw-bold fs-5' type="submit" value='Order'/>
    
        </div>
      
        </form>
</div>
<div className='col-lg-4 col-md-12 col-sm-12 px-4 cart-total-part'>
            <h6 className='mb-4 fs-5 checkout-title text-danger fw-bolder'>চেক-আউট সামারি</h6>
            <div className='d-flex justify-content-between'>
                <p>Sub Total</p>
                <p>{cartTotalAmount}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Shipping</p>
                <p>{shipping }</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{finalCartAmount}</p>
            </div>
             
            <div className='d-flex justify-content-between'>
                <p>Payable Total</p>
                <p>{finalCartAmount}</p>
               
            </div>
           
            <div className='mt-3'>
           
           </div>
           </div>
      </div>
   
      <ToastContainer />
  </div>
      </div>
    );
};

export default Shipping;