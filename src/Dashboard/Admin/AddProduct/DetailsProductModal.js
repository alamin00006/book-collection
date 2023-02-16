import React from 'react';
import { Modal } from 'react-bootstrap';
import addProduct from './Product.module.css'
const DetailsProductModal = ({showDetails, handleCloseDetails,productDetails }) => {
    console.log(productDetails)
    return (
        <div className='container'>
            <Modal className={addProduct.modal} show={showDetails} onHide={handleCloseDetails} backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
                <Modal.Title className=''>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='rounded'>
          
          <div class="details-page">
        <div class="container-fluid details-side">
          <div class="row ">
            
            <div class="col-lg-4 details-side-1">
              
              <div class="">
           
                {/* <div class="tab-pane active" id="pic-1">
                  <img className='details-pic'   alt=''
                    src={`http://localhost:5000/${singleProduct3?.image}`} /></div>
                </div>
           */}
              
            </div>
            <div class="details col-lg-5 details-side-2">
              <h3 class="product-title">hgfhfggfg</h3>
              <p>লেখক : <span className='text-primary'>fgdfgdg</span></p>
              <div>
           
              <span>/ 14 Reviews</span>
              </div>
              <p>Publisher : টেকনিক্যাল প্রকাশনী</p>
             
             
              <p className='book-tag'>Electrical Licence Viva Guide</p>
               <div className='d-flex'>
             
               </div>
            
            </div>
          </div>
        </div>
      </div>
      </div>
    
          
        </Modal.Body>
        
      </Modal>
        </div>
    );
};

export default DetailsProductModal;