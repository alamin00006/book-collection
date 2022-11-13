import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import IslamicBook from './Pages/BookCollection/IslamicBook';
import PreOrder from './Pages/BookCollection/PreOrder';
import General from './Pages/BookCollection/General';
import Engineering from './Pages/BookCollection/Engineering';
import EngineeringJob from './Pages/BookCollection/EngineeringJob';
import AdmissionGuide from './Pages/BookCollection/AdmissionGuide';
import EducationResearch from './Pages/BookCollection/EducationResearch';
import English from './Pages/BookCollection/English';
import ComputerProgramming from './Pages/BookCollection/ComputerProgramming';
import MarketingSaling from './Pages/BookCollection/ComputerProgramming';
import { Routes, Route, Navigate } from "react-router-dom";
import Book from './Pages/BookCollection/Book';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SingUp';
import ProductDetails from './Pages/Products/ProductDetails';
import Product2Details from './Pages/Products2/Product2Details';
import Product3Details from './Pages/Products3/Product3Details';
import Product4Details from './Pages/Products4/Product4Details';
import Product5Details from './Pages/Products5/Product5Details';
import Product6Details from './Pages/Products6/Product6Details';
import Products3All from './Pages/Products3/Product3All';
import Product3AllDetails from './Pages/Products3/Product3AllDetails';
import Product3Summary from './Pages/Products3/Product3Summary';
import AddToCart from './Pages/AddToCart/AddToCart';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from './Pages/Loading/Loading';



function App() {
  const [user] = useAuthState(auth);
  const [carts, setCarts] = useState([]);
  
  const { isLoading, refetch} = useQuery(['users', user], () => fetch(`http://localhost:5000/carts?customer=${user?.email}`, {
    method: "GET",
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
 }
}).then(res =>{
  if(res.status ===401 || res.status === 403){
            Navigate('/');
            signOut(auth);
            localStorage.removeItem('accessToken')
            }
         return res.json()
})
.then(data =>{
  setCarts(data)
  
}))
if(isLoading){
  <Loading></Loading>
}
refetch()


//   useEffect( () =>{
 
//     if(user){
      
//         fetch(`http://localhost:5000/carts?customer=${user?.email}`, {
//             method: "GET",
//             headers: {
//               'content-type': 'application/json',
//                authorization : `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//     .then(res =>{
//         if(res.status ===401 || res.status === 403){
//         Navigate('/');
//         signOut(auth);
//         localStorage.removeItem('accessToken')
//         }
//      return res.json()
//     })
//     .then(data => {
//       setCarts(data)
//       console.log(data);
//     })
//     }
 
// }, [carts, user])


//   useEffect( () =>{
        
//     fetch(`http://localhost:5000/carts`, {
//         method: "GET",
//         headers: {
//             'content-type': 'application/json',
//             // authorization : `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     })
// .then(res =>{
//  return res.json()
// })
// .then(data => {
//     setCarts(data)
    
// })

// }, [carts])
  const AddToCarts = (item)=>{
   
   
    const orderData = {
      orderId : item._id ,
      name: item.name,
      customer:user?.email,
      customerName:user?.displayName,
      picture:item.picture,
      price : item.price,
      quantity:item.quantity,
      stock:item.stock,
      suppliyerName:item.suppliyerName,
      description:item.description
      // customerName : user?.displayName,
      // customer : user?.email,
      // address: event.target.address.value,
      // phone: event.target.phone.value,
      // orderQuantity: event.target.orderQuantity.value,
  
  }
  
  fetch('http://localhost:5000/carts', {
  method: 'POST',
  headers:{
    'content-type': 'application/json',
    authorization : `Bearer ${localStorage.getItem('accessToken')}`
  
  },
  body: JSON.stringify(orderData)
  })
  .then(res => res.json()
   
  )
  .then(data => {
    // console.log(data.result.insertedId)
   
    if(data.success){
     toast.success('Your Order is Done');
    
    }
    else{
     toast.error('Allready this item orderd')
    }
  })


      // const myCart = carts.find(cart =>cart._id === item._id);
      // if(myCart){
      //   return(
      //     alert('already added Add To Cart Page')
      //     );
      // }
      // const newCart = [...carts, item];
      // setCarts(newCart)
      
      // console.log(newCart);
  } 
 
  return (
    <div>
   <Header carts={carts} setCarts={setCarts}></Header>
      
      <Routes>
        <Route path='/' element={<Home AddToCarts={AddToCarts}></Home>}></Route>
        <Route path='/islamicBook' element={<IslamicBook></IslamicBook>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        <Route path='/PreOrder' element={<PreOrder></PreOrder>}></Route>
        <Route path='/ComputerProgramming' element={<ComputerProgramming></ComputerProgramming>}></Route>
        <Route path='/MarketingSaling' element={<MarketingSaling></MarketingSaling>}></Route>
        <Route path='/English' element={<English></English>}></Route>
        <Route path='/General' element={<General></General>}></Route>
        <Route path='/Engineering' element={<Engineering></Engineering>}></Route>
        <Route path='/EngineeringJob' element={<EngineeringJob></EngineeringJob>}></Route>
        <Route path='/AdmissionGuide' element={<AdmissionGuide></AdmissionGuide>}></Route>
        <Route path='/EducationResearch' element={<EducationResearch></EducationResearch>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SignUp carts={carts}></SignUp>}></Route>
        <Route path='/summary' element={<Product3Summary></Product3Summary>}></Route>
        <Route path='/productDetails/:detailsId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/product2Details/:details2Id' element={<Product2Details></Product2Details>}></Route>
        <Route path='/product3Details/:details3Id' element={<Product3Details AddToCarts={AddToCarts}></Product3Details>}></Route>
        <Route path='/product4Details/:details4Id' element={<Product4Details></Product4Details>}></Route>
        <Route path='/product5Details/:details5Id' element={<Product5Details></Product5Details>}></Route>
        <Route path='/product6Details/:details6Id' element={<Product6Details></Product6Details>}></Route>
        <Route path='/nonTeckAll/product3AllDetails/:details3Id' element={<Product3AllDetails></Product3AllDetails>}></Route>
        <Route path='/cart' element={<AddToCart carts={carts} setCarts={setCarts}></AddToCart>}></Route>
        
        {/* allProduct get route */}
        <Route path='/nonTeckAll' element={<Products3All></Products3All>}></Route>

      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
