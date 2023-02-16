import React from 'react';
import { Modal } from 'react-bootstrap';
import editProduct from '../AddProduct/Product.module.css'
const SeeReviewDetails = ({show,setShow, review}) => {

    const handleClose = () => setShow(false);
    return (
        <div className='container'>
            <Modal className={editProduct.modal} show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
                <Modal.Title className=''>Review Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='rounded'>
                <div>
                    <h5 className='text-center text-white bg-danger p-5'>Customer Comment</h5>
                    <h5 className='text-center mt-3'>{review?.comment}</h5>
                </div>
        </Modal.Body>
        
      </Modal>
        </div>
    );
};

export default SeeReviewDetails;