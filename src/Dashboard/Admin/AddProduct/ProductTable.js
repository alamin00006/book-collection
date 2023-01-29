import React from 'react';
import { Button } from 'react-bootstrap';
import DeleteIcon from '../../../svgIcons/DeleteIcon';
import DetailsIcon from '../../../svgIcons/DetailsIcon';
import EditIcon from '../../../svgIcons/EditIcon';
import './ProductTable.css'

const ProductTable = ({setEditProduct, product, index, handleShow}) => {
    return (
        
             <tr>
                    <td>{index+1}</td>
                    <td>{product?.nameB}</td>
                    <td>{product?.quantity}</td>
                    <td>{product?.price}</td>
                    <td className='text-center'>
                        <span className='details-icon'>
                            <DetailsIcon/>
                        </span></td>
                    <td>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div onClick={() =>setEditProduct(product)}>
                                <Button className='edit-icon' onClick={handleShow} >
                                   <span>
                                       <EditIcon/>
                                   </span>
                                </Button>
                               
                            </div>
                              <div className='ms-5'>
                                <span className='delete-icon'><DeleteIcon/></span>
                              </div>
                        </div>
                    </td>
                  
                  </tr>
      
    );
};

export default ProductTable;