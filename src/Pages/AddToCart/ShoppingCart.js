import React from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '../store/reducers/cartSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// {cart, carts, setCarts, setTotal, total, data}
const ShoppingCart = () => {
    const dispatch = useDispatch()
    // const [reload, setReload] = useState(true);
    // let [count, setCount] = useState(cart.quantity);
    const cart = useSelector((state) => state.cart);
    const{cartTotalAmount}=useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
    // const [cartAmount, setCartAmount] = useState(cart.price*cart.quantity);
    let shipping = 50;
    const finalCartAmount = shipping + cartTotalAmount;
    const handleCountInc = () =>{
        // setTotal(total+1)
        // setCount(parseInt(++ count));
        //  const quantity = parseInt(count);
      
        //  const price = cart.price*parseInt(count);
        //  const totalPrice = price;

        // const newQuantity = {quantity, totalPrice };
        // const url = `http://localhost:5000/carts/${cart._id}`;
        //       fetch(url, {
        //           method: 'PUT',
        //           headers: {
        //               'content-type': 'application/json'
        //           },
        //           body: JSON.stringify(newQuantity)
        //       })
        //       .then(res => res.json())
        //       .then(data =>{
              
        //       })  

    }
    const handleCountDec = () =>{
        // setTotal(total-1)
    //    if(count<=1){
    //     return;
    //    }
    //    setCount(parseInt(-- count));
       
    //    const quantity = parseInt(count);
    //    const price = cart.price*parseInt(count);
    //    const totalPrice = price;

    //   const newQuantity = {quantity, totalPrice };
    //    const url = `http://localhost:5000/carts/${cart._id}`;
    //          fetch(url, {
    //              method: 'PUT',
    //              headers: {
    //                  'content-type': 'application/json'
    //              },
    //              body: JSON.stringify(newQuantity)
    //          })
    //          .then(res => res.json())
    //          .then(data =>{
              
    //          })
   
    }

    const handleDeleteCart = (id)=>{
    
        // const url = `http://localhost:5000/carts/${id}`;
        //     fetch(url , {
        //         method: "DELETE",
        //       }).then(res => res.json())
        //         .then(data => {
        //             if(data.deletedCount >0 ){
        //                const reaminingData = carts.filter(cart => cart._id !==id);
        //                setCarts(reaminingData)
                       
                      
        //             }
        //         })
  
    }
    return (
        
        <div className='container'>
           <div className='row'>
            <div className='col-lg-8'>
            {
                cart.cartItems.map((data, index) =>
                <div key={index} className='row p-5 cart-item border'>
                    <div className=' d-flex'>
                        <div className='cart-image'>
                        <img src={data.image} alt=''/>
                        </div>
                        <div className='ms-4'>
                            <p>মোহাম্মদ আলীর বাংলাদেশ বিজয়</p>
                            <p>মুহাম্মদ লুৎফুল হক</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex mt-5'>
                     <div className='cart-input-part'>
                      <MinusSmallIcon onClick={()=>dispatch(decreaseCart(data))} className='cart-minus-icon border-0 rounded'/>
                      <input type="text" value={data.cartQuantity} disabled className="cart-input rounded"/>
                      <PlusSmallIcon  onClick={()=>dispatch(incrementCart(data))}  className="cart-plus-icon border-0 rounded"/>
                     </div>
                     <div className='d-flex'>
                        <p>Tk {data.originalPrice}</p>
                        <p ><TrashIcon onClick={() =>dispatch(removeFromCart(data))} className='cart-trash-icon ms-5 '/></p>
                        {/* onClick={()=>handleDeleteCart(cart._id)} */}
                     </div>
                    </div>
                </div>)
                }
            </div>
                <div className='col-lg-4 col-md-4 col-sm-12 p-5 cart-total-part'>
            <h6 className='mb-4 fs-5 checkout-title'>Checkout Summary</h6>
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
            <div className='text-center checkout-button mt-3'>
                <button className='btn text-center'>
                    <Link className='text-white' to='/shipping'>Proceed To Checkout</Link>
                </button>
            </div>
           </div>
           </div>
        </div>
        
    );
};

export default ShoppingCart;