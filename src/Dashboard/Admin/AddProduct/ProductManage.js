import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useProduct3 from '../../../Hooks/UseProduct3';
import DeleteIcon from '../../../svgIcons/DeleteIcon';
import DetailsIcon from '../../../svgIcons/DetailsIcon';
import EditIcon from '../../../svgIcons/EditIcon';
import EditProductModal from './EditProductModal';
import ProductTable from './ProductTable';

const ProductManage = () => {
    const [show, setShow] = useState(false);
    const [productEdit, setEditProduct] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [myProducts3] = useProduct3()
    return (
        <div>
            <Table striped bordered responsive hover className='mt-5'>
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
             myProducts3?.data?.map((product, index) => <ProductTable product={product} index={index} setEditProduct={setEditProduct} handleShow={handleShow}></ProductTable>)
          } 
               
                
        
       
      
      </tbody>
    </Table>
    <EditProductModal productEdit={productEdit} show={show} setShow={setShow} handleClose={handleClose}/>
        </div>
    )
};

export default ProductManage;