import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';
import addProduct from './Product.module.css'


const AddProductModal = ({refetch,show, handleClose}) => {

  const [discount, setDiscount] = useState('0')
  const [image, setImage] = useState([])
  const [productPdf, setProductPdf] = useState([])
 const [categories] = useCategories();
 const [tags, setTags] = useState([])

 const handleKeyDown=(e)=>{
     if(e.key !== 'Enter') return
     const value = e.target.value
    //  console.log(value)
     if(!value.trim()) return
     setTags([...tags, value])
     e.target.value = ''
 }

 const removeTag =(index)=>{
     setTags(tags.filter((el, i) => i !== index))
 }

 const handleNewProduct = async(e) =>{
  e.preventDefault();
    if(tags.length >5){
      return toast('5 Tags more than not allowed')
    }
    //  console.log(productPdf)
    

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
      productTags:[tags],
      descriptionB:e.target.productDetailsBangla.value,
      descriptionE:e.target.productDetailsEnglish.value,
      writerDetails:e.target.writerDetails.value,
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
     formData.append('productTags', productAdd.productTags)
     formData.append('descriptionB', productAdd.descriptionB)
     formData.append('descriptionE', productAdd.descriptionE)
     formData.append('writerDetails', productAdd.writerDetails)
   
    const isValidFileUploaded=(file)=>{
      const validExtensions = ['png','jpeg','jpg','PNG','JPG','jpeg','JPEG']
      const fileExtension = file.type.split('/')[1]
      return validExtensions.includes(fileExtension)
    }
    const isValidPdfFile=(file)=>{
      const validExtensions = ['pdf','PDF']
      const fileExtension = file?.type?.split('/')[1]
      return validExtensions.includes(fileExtension)
    }
    
        if(image?.length >1){
          return toast.error('please provide one book picture')
        }
        const file = image[0];
        if(file.size>5000000){
          return toast.error('Product Picture size 5MB more than not allowed')
         }else{
          if(isValidFileUploaded(file)){
            Array.from(image).forEach(item => {
               formData.append('image', item)
           })
           }else{
             return(toast.error('Product Picture is not valid'))
             }
        }
     


    if(productPdf.length >1){
      return toast.error('please provide one pdf file')
    }
  
    const pdf = productPdf[0];
  
       if(pdf.size>5000000){
        return toast.error('pdf file size 5MB more than not allowed')
       }else{
        if(isValidPdfFile(pdf)){
          Array.from(productPdf)?.forEach(item => {
            formData.append('pdf', item)
          })}
        else{
          return(toast.error('pdf file is not valid'))
        }
       }
    
       try{
        const data = await axios.post('http://localhost:5000/api/v1/product',formData);
        refetch() 
        toast.success(data.data.message)
       
       }catch(error){
        return toast.warn(error.response.data.message)
       }
         
      e.target.reset()
     
    
};
    return (
        <div className='container bg-warning'>
        
        <Modal className={addProduct.modal} show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
                <Modal.Title className=''>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body className='rounded'>
          
            <form onSubmit={handleNewProduct}
             className='mt-2 product-form px-4 mx-2 py-3 rounded row'>
                <div className='col-lg-4'> 
                  <label>Product Name in Bangla : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="text" className='' name="productNameBangla" required  placeholder='Product Name in Bangla' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label>Product Name in English: <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input  type="text" className='' name="productNameEnglish" required  placeholder='Product Name in English' id="" />
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
                  <input onChange={(e)=>setDiscount(e.target.value)} type="number" className='' name="discount" placeholder='discount' id="" />
                </div>
                <div className='col-lg-4'> 
                  <label for='status'>Status : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='status'  id='status'>
                    <option selected disabled>Select A Status</option>
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
                <div className='col-lg-8'> 
                  <label for='writer'>Writer : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='writerName' id='writer'>
                    <option selected disabled>Select A Writer</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-8'> 
                  <label for='publication'>Publications : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <select style={{width:"100%", height:'45px'}} required name='publicationName' id='publication'>
                    <option selected disabled>Select A Publication</option>
                     {
                      categories?.data?.map(category =><option>{category.name}</option>)
                     }
                  </select>
                </div>
                <div className='col-lg-4 mt-1'> 
                  <label for='book-fair' className='text-danger'>If the Book of Fair : </label>
                  <select style={{width:"100%", height:'45px'}} required name='bookFair' id='book-fair'>
                    <option className='book-fair'> If the Book of Fair</option>
                    <option>2023</option>
                  </select>
                </div>
                
                <div className='col-lg-12'> 
                <label for="product-details-Bangla">Product Details in Bangla: <span className='text-danger fw-bold fs-5'>*</span></label>
                  <textarea className='rounded' id="product-details-Bangla" name="productDetailsBangla" rows="5" />
                </div>
                <div className='col-lg-12'> 
                <label for="product-details-English">Product Details in English : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <textarea className='rounded' id="product-details-English" name="productDetailsEnglish" rows="5" />
                </div>
                <div className='col-lg-12'> 
                 <label for="writerDetails">Writer Details in Bangla:</label>
                  <textarea className='rounded' id="writerDetails" name="writerDetails" rows="4" />
                </div>
                <div className='col-lg-6'> 
                  <label>Upload a Book Picture : <span className='text-danger fw-bold fs-5'>*</span></label>
                  <input multiple onChange={(e) =>{setImage(e.target.files)}} type="file" className='product-picture' required name="image" placeholder='productPicture' id="" />
                </div>

               <div className='col-lg-6 mt-2'> 
                  <label> Upload a Pdf : </label>
                  <input multiple onChange={(e) =>{setProductPdf(e.target.files)}} required type="file" className='product-picture' name="pdf" placeholder='productPicture' id="" />
                </div>

                <div className='col-lg-12 mt-2'> 
                  <label>Product Tag : </label>
              
                   { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <textarea onKeyDown={handleKeyDown} type="text" name="productTag"  className="tags-input ps-2" placeholder="Product Tag(Write then press entire to add new tag)" />
                </div>
                <div className='d-flex justify-content-end mt-4'>
                      <div>
                          <button className="btn btn-dark fs-5" onClick={handleClose} >Cancel</button>
                      </div>
                      <div>
                          <input className='btn btn-danger fs-5' type="submit" value="Add product" />
                      </div>
                </div>
                  </form>
          
        </Modal.Body>
        
      </Modal>

        </div>
    );
};

export default AddProductModal;
