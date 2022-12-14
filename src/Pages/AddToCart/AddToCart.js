
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Cart from './Cart';

const AddToCart = () => {
    const navigate = useNavigate()
    let shipping = 50;
    let total1 = 0;
   
  
//    const finalTotal = total+shipping;
//    const disCountTotal = finalTotal*10/100;
   
    return (
        <div className='container cart-item-page mt-3'>
            <div className='text-center all-cart'>
                
          <div className='bg-warning p-5'>
                <h6 className='text-white fs-5 fw-bolder'>Your Cart is Empty</h6>
            <button className='text-center bg-info text-white border-0 px-5 py-2 fs-5 rounded' onClick={() => navigate('/')}>Continue Shipping</button>
            </div>
                
            
            {/* {
                carts.length === 0?<div className='bg-warning p-5'>
                <h6 className='text-white fs-5 fw-bolder'>Your Cart is Empty</h6>
            <button className='text-center bg-info text-white border-0 px-5 py-2 fs-5 rounded' onClick={() => navigate('/')}>Continue Shipping</button>
            </div>:''
                
            } */}
           
            </div>
          <div className='row cart-page gx-5'>
          <div className='col-lg-8 col-md-8 col-sm-12'>
            
           {/* {
                carts?.map(cart => <Cart cart={cart} key={cart._id} carts={carts} setCarts={setCarts} setTotal={setTotal} total={total}></Cart>)
               
            } */}
           </div>
           {/* {
            carts.length !== 0?<div className='col-lg-4 col-md-4 col-sm-12 p-5 cart-total-part'>
            <h6 className='mb-4 fs-5 checkout-title'>Checkout Summary</h6>
            <div className='d-flex justify-content-between'>
                <p>Sub Total</p>
                <p>{total}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Shipping</p>
                <p>{shipping }</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{finalTotal}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Payable Total</p>
                <p>{finalTotal}</p>
            </div>
            <div className='text-center checkout-button mt-3'>
                <button className='btn text-center'>
                    <Link className='text-white' to='/shipping'>Proceed To Checkout</Link>
                </button>
            </div>
           </div>:''
           } */}
          </div>

        </div>
    );
};

export default AddToCart;