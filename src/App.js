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

import { Routes, Route } from "react-router-dom";
import Book from './Pages/BookCollection/Book';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SingUp';
import ProductDetails from './Pages/Products/ProductDetails';
import Product2Details from './Pages/Products2/Product2Details';
import Product3Details from './Pages/Products3/Product3Details';
import Product4Details from './Pages/Products4/Product4Details';
import Product5Details from './Pages/Products5/Product5Details';
import Product6Details from './Pages/Products6/Product6Details';


function App() {
  return (
    <div>
   <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
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
        <Route path='/singUp' element={<SignUp></SignUp>}></Route>
        <Route path='/productDetails/:detailsId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/product2Details/:details2Id' element={<Product2Details></Product2Details>}></Route>
        <Route path='/product3Details/:details3Id' element={<Product3Details></Product3Details>}></Route>
        <Route path='/product4Details/:details4Id' element={<Product4Details></Product4Details>}></Route>
        <Route path='/product5Details/:details5Id' element={<Product5Details></Product5Details>}></Route>
        <Route path='/product6Details/:details6Id' element={<Product6Details></Product6Details>}></Route>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
