
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';

const AddProduct = ({show, handleClose}) => {
 const [categories] = useCategories();

 const handleNewProduct = async(event) =>{
     event.preventDefault();
     if(event.target.categoryName.value ==='Select A Category'){
      return toast.error('Please Select A Category Name');
      }
    const selectedCategory = categories.data.find(categoryName => categoryName.name === event.target.categoryName.value);
   
    const newItem = {
      name:event.target.productName.value,
      description:event.target.description.value,
      price:event.target.price.value,
      quantity:event.target.quantity.value,
      status:event.target.status.value,
      category:{
        categoryName:selectedCategory.name,
        category_id: selectedCategory._id
      },
      image:event.target.image.files[0]
  
  }
  if(newItem?.status ==='Select A Status'){
    return toast.error('Please Select Product Status');
    }

 

  const formData = new FormData();
     formData.append('name', newItem.name)
     formData.append('description', newItem.description)
     formData.append('price', newItem.price)
     formData.append('quantity',newItem.quantity)
     formData.append('status', newItem.status)
     formData.append('image', newItem.image)
     formData.append('category', JSON.stringify(newItem.category))

 
       try{
        const data = await axios.post('http://localhost:5000/api/v1/product-add',formData);
        
        if(data.status===400){
          return toast.error(data.data.error)
        }
        toast.success(data.data.message)
         
       }catch(error){
        console.log(error)
       }
         
      event.target.reset()
      
 

 
};
    return (
        <div className='container'>
        
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <form onSubmit={handleNewProduct} className='mt-5 px-4 py-3 border rounded row'>
                <div className='col-lg-4'> 
                  <label>Product Name : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="text" className='' name="productName" required  placeholder='Product Name' id="" />
                </div>
               
                <div className='col-lg-4'> 
                  <label>Price : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="number" className='' required name="price" placeholder='Price' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Quantity : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="number" className='' required name="quantity" placeholder='Quantity' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Discount : </label>
                  <input  type="number" className='' required name="quantity" placeholder='discount' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label for='status'>Status : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='status'  id='status'>
                    <option>Select A Status</option>
                    <option>in-stock</option>
                    <option>out-of-stock</option>
                    <option>Discontinued</option>
                  
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='category'>Category : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='categoryName' id='category'>
                    <option selected disabled>Select A Category</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='writer'>Writer : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='writer' id='writer'>
                    <option selected disabled>Select A Writer</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-8'> 
                  <label for='publication'>Publications : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='publication' id='publication'>
                    <option selected disabled>Select A Publication</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='book-fair' className='text-danger'>If the Book of Fair : </label>
                  <select style={{width:"100%", height:'45px'}} required name='bookFair' id='book-fair'>
                    <option selected disabled className='book-fair'> If Book Fairs</option>
                    <option>2023</option>
                  </select>
                </div>
                
                <div className='col-lg-8'> 
                  <label>Product Tag : </label>
                  <input  type="text" className='' required name="quantity" placeholder='Product Tag (Write then press enter to add new tag)' id="" />
                </div>
                
                <div className='col-lg-12'> 
                <label for="product-details">Product Details : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <textarea className='rounded' id="product-details" name="productDetails" rows="5" />
                </div>
                <div className='col-lg-12'> 
                 <label for="tags">Writer Details :</label>
                  <textarea className='rounded' id="tags" name="tags" rows="4" />
                </div>
                <div className='col-lg-6'> 
                  <label>Upload a Book Picture : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input multiple type="file" className='product-picture' required name="image" placeholder='productPicture' id="" />
                </div>
                <div className='col-lg-6 mt-2'> 
                  <label> Upload a Pdf (if you have) : </label>
                  <input multiple type="file" className='product-picture' required name="image" placeholder='productPicture' id="" />
                </div>
               
                <div className='d-flex justify-content-end mt-4'>
                      <div>
                          <button className="btn btn-danger fs-5" onClick={handleClose} >Cancel</button>
                      </div>
                      <div>
                          <input className='btn btn-primary fs-5' type="submit" value="Add product" />
                      </div>
                </div>
                  </form>
           <ToastContainer/>
        </Modal.Body>
        
      </Modal>
        </div>
    );
};

export default AddProduct;