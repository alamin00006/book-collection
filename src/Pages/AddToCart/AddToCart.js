
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const AddToCart = ({carts, setCarts}) => {
    const navigate = useNavigate()
    let shipping = 50;
    let total = 0;
    console.log(carts)
   for(const product of carts){
      total = total+product.price;
   }
   const finalTotal = total+shipping;
    return (
        <div className='container cart-item-page mt-3'>
            <div className='text-center'>
                
            {
                carts.length === 0? <div>
                    <h6>Your Cart is Empty</h6>
                <button className='text-center bg-info text-white border-0 px-5 py-2 fs-5 rounded' onClick={() => navigate('/')}>Continue Shipping</button>
                </div>
                :''
            }
            </div>
          <div className='row cart-page gx-5'>
          <div className='col-lg-8'>
            
           {
                carts?.map(cart => <Cart cart={cart} key={cart._id} carts={carts} setCarts={setCarts} ></Cart>)
               
            }
           </div>
           {
            carts.length !== 0?<div className='col-lg-4 bg-white p-5 cart-total-part'>
            <h6 className='mb-4 fs-5'>Checkout Summary</h6>
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
                <button className='btn text-center text-white'>Place Order</button>
            </div>
           </div>:''
           }
          </div>

        </div>
    );
};

export default AddToCart;