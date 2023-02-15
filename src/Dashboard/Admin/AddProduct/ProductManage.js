import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useProduct3 from '../../../Hooks/UseProduct3';
import { ToastContainer } from 'react-toastify';
import EditProductModal from './EditProductModal';
import ProductTable from './ProductTable';

const ProductManage = () => {
    const [show, setShow] = useState(false);

    const [productEdit, setEditProduct] = useState(null)
    const [productDelete, setDeleteProduct] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [myProducts3, refetch] = useProduct3()
    // console.log(myProducts3)
    return (
        <div>
            <Table striped bordered responsive className='mt-5'>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
          {
             myProducts3?.data?.map((product, index) => <ProductTable product={product} index={index} setEditProduct={setEditProduct} handleShow={handleShow} setDeleteProduct={setDeleteProduct} productDelete={productDelete} refetch={refetch}></ProductTable>)
          } 
          <ToastContainer className="toast-position"
        position="top-center"/>
      </tbody>
    </Table>
    <EditProductModal productEdit={productEdit} show={show} setShow={setShow} handleClose={handleClose} refetch={refetch}/>
 
        </div>
    )
};

export default ProductManage;