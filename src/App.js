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
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

// import { signOut } from 'firebase/auth';
// import { useQuery } from 'react-query';
// import Loading from './Pages/Loading/Loading';
// import RequireAuth from './Pages/Login/RequireAuth';
import { useState } from 'react';
import Shipping from './Pages/Shipping/Shipping';
import Order from './Pages/Order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { addByIncrement, addToCart } from './Pages/store/reducers/cartSlice';
import DrawerCart from './Pages/AddToCart/Drawer';
import ShoppingCart from './Pages/AddToCart/ShoppingCart';
import Dashboard from './Dashboard/SideNavbar/Dashboard';

import OrderDetails from './Pages/Order/OrderDetails';
import SideNavbar from './Dashboard/SideNavbar/SideNavbar';
import UserOrder from './Dashboard/SideNavbar/UserOrder';
import ProductPage from './Dashboard/Admin/AddProduct/ProductPage';
import CategoryAdd from './Dashboard/Admin/Category/CategoryAdd';
import WriterAdd from './Dashboard/Admin/Writer/WriterAdd';
import Publication from './Dashboard/Admin/Publication/Publication';
import BookFair from './Dashboard/Admin/BookFair/BookFair';
import Coupon from './Dashboard/Admin/Coupon/Coupon';
import TagsInput from './Dashboard/Admin/AddProduct/TagsInput';
import Category from './Pages/Categorys/Category';
import CategoryDetails from './Pages/Categorys/CategoryDetails';
import OrderManagePage from './Dashboard/Admin/OrderMange/OrderManagePage';
import ResetPasssword from './Pages/Login/ResetPasssword';
import ReviewMange from './Dashboard/Admin/ReviewMange/ReviewMange';
import ProductManage from './Dashboard/Admin/AddProduct/ProductManage';

function App() {
  const [user] = useAuthState(auth);
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(1)
  const dispatch = useDispatch()
  const [islamicBook, setIslamicBook] = useState('')
  
  const handleIslamicBook = (islamic)=>{
    setIslamicBook(islamic);
}

  // const cart = useSelector((state) => state.cart);
//   const { isLoading, refetch} = useQuery(['users', user], () => fetch(`http://localhost:5000/carts?customer=${user?.email}`, {
//     method: "GET",
//     headers: {
//       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//  }
// }).then(res =>{
//   if(res.status ===401 || res.status === 403){
//             Navigate('/');
//             signOut(auth);
//             localStorage.removeItem('accessToken')
//             }
//          return res.json()
// })
// .then(data =>{
//   setCarts(data)
  
// }))
// if(isLoading){
//   <Loading></Loading>
// }
// refetch()

  const AddToCarts = (item)=>{
    // dispatch(addToCart(item));
    // console.log(item);

  } 
  
  return (
    <div>
   <Header handleIslamicBook={handleIslamicBook}></Header>
      
      <Routes>
        <Route path='/' element={<Home AddToCarts={AddToCarts} ></Home>}></Route>
        <Route path='/islamicBook' element={<IslamicBook islamicBook={islamicBook}></IslamicBook>}></Route>
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
        <Route path='/reset-password' element={<ResetPasssword/>}></Route>
        <Route path='/summary' element={<Product3Summary></Product3Summary>}></Route>
        <Route path='/productDetails/:detailsId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/product2Details/:details2Id' element={<Product2Details></Product2Details>}></Route>
        
        <Route path='/product3Details/:details3Id' element={<Product3Details AddToCarts={AddToCarts} ></Product3Details>}></Route>
        <Route path='/product4Details/:details4Id' element={<Product4Details></Product4Details>}></Route>
        <Route path='/product5Details/:details5Id' element={<Product5Details></Product5Details>}></Route>
        <Route path='/product6Details/:details6Id' element={<Product6Details></Product6Details>}></Route>
        <Route path='/cart' element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path='/nonTeckAll/product3AllDetails/:details3Id' element={<Product3AllDetails></Product3AllDetails>}></Route>
        <Route path='' element={
        
          <AddToCart></AddToCart> 
       
    }></Route>
        
        {/* allProduct get route */}
        <Route path='/nonTeckAll' element={<Products3All></Products3All>}></Route>
         {/* Shipping Routes */}
         <Route path='/shipping' element={<Shipping></Shipping>}></Route>
         <Route path='/category' element={<Category/>}></Route>
         {/* <Route path='/order' element={<Order></Order>}></Route> */}
        
         <Route path='/order/:orderDetailsId' element={<OrderDetails></OrderDetails>}></Route>
         <Route path='/category/:categoryDetailsId' element={<CategoryDetails></CategoryDetails>}></Route>
         {/* <Route path='/product-add' element={<AddProduct></AddProduct>}></Route> */}
         <Route path='/side-navbar' element={<SideNavbar></SideNavbar>}>
              <Route index element={<Dashboard></Dashboard>}></Route>
              <Route path='user-order' element={<UserOrder></UserOrder>}></Route>
              <Route path='product-page' element={<ProductManage/>}></Route>
              <Route path='category-add' element={<CategoryAdd></CategoryAdd>}></Route>
              <Route path='writer-add' element={<WriterAdd></WriterAdd>}></Route>
              <Route path='publication-add' element={<Publication></Publication>}></Route>
              <Route path='book-fair-add' element={<BookFair></BookFair>}></Route>
              <Route path='coupon-add' element={<Coupon></Coupon>}></Route>
              <Route path='order' element={<Order></Order>}></Route>
              <Route path='order-manage' element={<OrderManagePage/>}></Route>
              <Route path='review-manage' element={<ReviewMange/>}></Route>
         </Route>

      </Routes>
     
      <Footer></Footer>

    </div>
  );
}

export default App;
