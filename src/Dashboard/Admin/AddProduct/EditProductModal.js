import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';
import editProduct from './Product.module.css'

const EditProductModal = ({show, handleClose, productEdit}) => {
  const [discount, setDiscount] = useState('0')
  console.log(productEdit?._id)
 const [categories] = useCategories();
 
 const handleNewProduct = async(e) =>{
    //  console.log(e.key)
     e.preventDefault();

     if(e.target.status.value ==='Select A Status'){
      return toast.error('Please Select Product Status');
      }

     if(e.target.categoryName.value ==='Select A Category'){
      return toast.error('Please Select A Category Name');
      }

      if(e.target.writerName.value ==='Select A Writer'){
        return toast.error('Please Select Product Writer');
        }
      if(e.target.publicationName.value ==='Select A Publication'){
        return toast.error('Please Select Product Publication');
        }
     
    const selectedCategory = categories.data.find(categoryName => categoryName.name === e.target.categoryName.value);
    const selectedWriter = categories.data.find(writerName => writerName.name === e.target.writerName.value);
    const selectedPublication = categories.data.find(publicationName => publicationName.name === e.target.publicationName.value);
   
    
    const productAdd = {
      nameB:e.target.productNameBangla.value,
      nameE:e.target.productNameEnglish.value,
      price:e.target.price.value,
      quantity:e.target.quantity.value,
      discount:discount,
      status:e.target.status.value,
      category:{
        categoryName:selectedCategory.name,
        category_id: selectedCategory._id
      },
      writer:{
        writerName:selectedWriter.name,
        writer_id: selectedWriter._id
      },
      publication:{
        publicationName:selectedPublication.name,
        publication_id: selectedPublication._id
      },
      bookFair:e.target.bookFair.value,
      descriptionB:e.target.productDetailsBangla.value,
      writerDetails:e.target.writerDetails.value,
      productPdf:e.target.pdf.files[0]
  
  }
  if(productAdd.bookFair ==='If the Book of Fair'){
     productAdd.bookFair = null;
  }

  const formData = new FormData();
     formData.append('nameB', productAdd.nameB)
     formData.append('nameE', productAdd.nameE)
     formData.append('price', productAdd.price)
     formData.append('quantity',productAdd.quantity)
     formData.append('discount',productAdd?.discount)
     formData.append('status', productAdd.status)
     formData.append('category', JSON.stringify(productAdd.category))
     formData.append('writer', JSON.stringify(productAdd.writer))
     formData.append('publication', JSON.stringify(productAdd.publication))
     formData.append('bookFair', productAdd.bookFair)
    //  formData.append('productTags', productAdd.productTags)
     formData.append('descriptionB', productAdd.descriptionB)
    //  formData.append('descriptionE', productAdd.descriptionE)
     formData.append('writerDetails', productAdd.writerDetails)
    //  formData.append('image', productAdd.image)
     formData.append('productPdf', productAdd.productPdf)

 
       try{
        const data = await axios.put(`http://localhost:5000/api/v1/product/${productEdit._id}`,formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
        
        if(data.status===400){
          return toast.error(data.data.error)
        }
        toast.success(data.data.message)
         
       }catch(error){
        console.log(error)
       }
      
    
};
    return (
        <div className='container bg-warning'>
        
        <Modal className={editProduct.modal} show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
                <Modal.Title className=''>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body className='rounded'>
          
            <form onSubmit={handleNewProduct}
             className='mt-2 product-form px-4 mx-2 py-3 rounded row'>
                 <div className='col-lg-4'> 
                  <label>Product Name in Bangla : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="text" className='' name="productNameBangla" defaultValue={productEdit?.nameB} required placeholder='Product Name in Bangla' />
                </div>
                <div className='col-lg-4'> 
                  <label>Product Name in English: <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="text" className='' name="productNameEnglish" required  placeholder='Product Name in English' defaultValue={productEdit?.nameE} />
                </div>
               
                <div className='col-lg-4'> 
                  <label>Price : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="number" className='' required name="price" placeholder='Price' defaultValue={productEdit?.price} />
                </div> 
                <div className='col-lg-4'> 
                  <label>Quantity : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="number" className='' required name="quantity" placeholder='Quantity' defaultValue={productEdit?.quantity} />
                </div>
                <div className='col-lg-4'> 
                  <label>Discount : </label>
                  <input onChange={(e)=>setDiscount(e.target.value)} type="number" className='' name="discount" placeholder='discount' defaultValue={productEdit?.discount} />
                </div>
                <div className='col-lg-4'> 
                  <label for='status'>Status : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='status'  id='status' defaultValue={productEdit?.status}>
                    <option selected disabled>Select A Status</option>
                    <option>in-stock</option>
                    <option>out-of-stock</option>
                    <option>Discontinued</option>
                  
                  </select>
                </div>
                <div className='col-lg-4'> 
                  <label for='category'>Category : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='categoryName' id='category' defaultValue={productEdit?.category?.categoryName}>
                    <option selected disabled>Select A Category</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-8'> 
                  <label for='writer'>Writer : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='writerName' id='writer' defaultValue={productEdit?.writer?.writerName}>
                    <option selected disabled>Select A Writer</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-8'> 
                  <label for='publication'>Publications : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='publicationName' id='publication' defaultValue={productEdit?.publication?.publicationName}>
                    <option selected disabled>Select A Publication</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4 mt-1'> 
                  <label for='book-fair' className='text-danger'>If the Book of Fair : </label>
                  <select style={{width:"100%", height:'45px'}} required name='bookFair' id='book-fair' defaultValue={productEdit?.bookFair}>
                    <option className='book-fair'> If the Book of Fair</option>
                    <option>2023</option>
                  </select>
                </div>
                
                <div className='col-lg-12'> 
                <label for="product-details-Bangla">Product Details in Bangla: <span className='text-danger fw-bold fs-5'>*</span></label>
                  <textarea className='rounded' id="product-details-Bangla" name="productDetailsBangla" rows="5" defaultValue={productEdit?.descriptionB}/>
                </div>
               
                <div className='col-lg-12'> 
                 <label for="writerDetails">Writer Details in Bangla:</label>
                  <textarea className='rounded' id="writerDetails" name="writerDetails" rows="4" defaultValue={productEdit?.writerDetails}/>
                </div>
             

                <div className='col-lg-6 mt-2'> 
                  <label> Upload a Pdf (if you have) : </label>
                  <input multiple type="file" className='product-picture' name="pdf" placeholder='productPicture' id="" />
                </div>
               
                <div className='d-flex justify-content-end mt-4'>
                      <div>
                          <button className="btn btn-danger fs-5" onClick={handleClose}>Cancel</button>
                      </div>
                      <div>
                          <input type="submit" className='btn btn-primary fs-5' value="Update Product" />
                      </div>
                </div>
                  </form>
          
        </Modal.Body>
        
      </Modal>
      <ToastContainer/>
        </div>
    );
};

export default EditProductModal;