
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';

const AddProduct = () => {
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
            <h1 className='text-primary mt-5 '>Add New Item</h1>
            <form onSubmit={handleNewProduct} className='mt-5 py-5 border rounded row'>
                <div className='col-lg-4'> 
                  <label>Product Name : </label>
                  <input  type="text" className='' name="productName" required  placeholder='Product Name' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Description : </label>
                  <input  type="text" className='' required name="description" placeholder='Description' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Price : </label>
                  <input  type="number" className='' required name="price" placeholder='Price' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Quantity : </label>
                  <input  type="number" className='' required name="quantity" placeholder='Quantity' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label for='status'>Status : </label>
                  <select style={{width:"100%", height:'45px'}} required name='status'  id='category'>
                    <option>Select A Status</option>
                    <option>in-stock</option>
                    <option>out-of-stock</option>
                  
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='category'>Category : </label>
                  <select style={{width:"100%", height:'45px'}} required name='categoryName' id='category'>
                    <option>Select A Category</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label>Product Picture : </label>
                  <input multiple type="file" className='' required name="image" placeholder='productPicture' id="" />
                </div>
                 
                 <input className='btn btn-primary' type="submit" value="Add New Item" />
                  </form>
           <ToastContainer/>
        </div>
    );
};

export default AddProduct;