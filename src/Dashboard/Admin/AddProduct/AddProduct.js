
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';

const AddProduct = () => {
 const [categories] = useCategories();
const [productName, setProductName] = useState('');
const [des, setDes] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');
const [status, setStatus] = useState('');
const [myCategoryName, setCategoryName] = useState('');
// const [categoryId, setCategoryId] = useState('');
const [file, setFile] = useState('');

const handleProductName = (e)=>{
  setProductName(e.target.value)
}
const handleDes = (e)=>{
  setDes(e.target.value)
}
const handlePrice = (e)=>{
  setPrice(e.target.value)
}
const handleQuantity = (e)=>{
  setQuantity(e.target.value)
}
const handleStatus = (e)=>{
  setStatus(e.target.value)
}
const handleCategoryName = (e)=>{
  setCategoryName(e.target.value)
}


 const handleNewProduct = async() =>{
  const selectedCategory = categories.data.find(categoryName => categoryName.name === myCategoryName);
console.log(selectedCategory)
    //  event.preventDefault();
    const categoryfiled ={
        categoryName:selectedCategory.name,
        category_id: selectedCategory._id
     
    }
  
const formData = new FormData();
     formData.append('name', productName)
     formData.append('description', des)
     formData.append('price', price)
     formData.append('quantity', quantity)
     formData.append('status', status)
     formData.append('image', file)
     formData.append('category', JSON.stringify(categoryfiled))
    //  formData.append('category_id', selectedCategory._id)
  

  // const imageValue = (event)=>{
  //   const myImage = event.target.image.value;
  //   if(myImage){
  //     const splitImage = myImage.split('fakepath\\');
  //    return setFile(splitImage[1])
  //   }
  // }
  // imageValue(event)
  // console.log(selectedCategory)

  //   const newItem = {
  //     name:event.target.productName.value,
  //     description:event.target.description.value,
  //     price:event.target.price.value,
  //     quantity:event.target.quantity.value,
  //     status:event.target.status.value,
  //     category:{
  //         name:selectedCategory.name,
  //         id: selectedCategory._id
  //     },
  //     image:file
  
  // }

  //   console.log(newItem)

 
  // if(newItem?.status ==='Select A Status'){
  //   return toast.error('Please Select Product Status');
  //   }

  // if(newItem?.category?.name ==='Select A Category'){
  //   return toast.error('Please Select A Category Name');
  //   }
       try{
        const data = await axios.post('http://localhost:5000/api/v1/product-add',formData);
        
        if(data.status===400){
          return toast.error(data.data.error)
        }
        toast.success(data.data.message)
         
       }catch(error){
        console.log(error)
       }
         
      // event.target.reset()
      
 

 
};
    return (
        <div className='container'>
            <h1 className='text-primary mt-5 '>Add New Item</h1>
            <div className='mt-5 py-5 border rounded row'>
                <div className='col-lg-4'> 
                  <label>Product Name : </label>
                  <input onChange={handleProductName} type="text" className='' name="productName"  placeholder='Product Name' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Description : </label>
                  <input onChange={handleDes} type="text" className=''  name="description" placeholder='Description' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Price : </label>
                  <input onChange={handlePrice} type="number" className=''  name="price" placeholder='Price' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Quantity : </label>
                  <input onChange={handleQuantity} type="number" className=''  name="quantity" placeholder='Quantity' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label for='status'>Status : </label>
                  <select onChange={handleStatus} style={{width:"100%", height:'45px'}} name='status'  id='category'>
                    <option>Select A Status</option>
                    <option>in-stock</option>
                    <option>out-of-stock</option>
                  
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='category'>Category : </label>
                  <select onChange={handleCategoryName}  style={{width:"100%", height:'45px'}} name='categoryName' id='category'>
                    <option>Select A Category</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label>Product Picture : </label>
                  <input multiple onChange={(e)=>setFile(e.target.files[0])} type="file" accept='images/' className='' name="image" placeholder='productPicture' id="" />
                </div>
                 
                 <input onClick={handleNewProduct} className='btn btn-primary' type="submit" value="Add New Item" />
                </div>
           <ToastContainer/>
        </div>
    );
};

export default AddProduct;