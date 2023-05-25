import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Home/Header";
import PreOrder from "./Pages/BookCollection/PreOrder";
import General from "./Pages/BookCollection/General";
import Engineering from "./Pages/BookCollection/Engineering";
import EngineeringJob from "./Pages/BookCollection/EngineeringJob";
import AdmissionGuide from "./Pages/BookCollection/AdmissionGuide";
import EducationResearch from "./Pages/BookCollection/EducationResearch";
import English from "./Pages/BookCollection/English";
import ComputerProgramming from "./Pages/BookCollection/ComputerProgramming";
import MarketingSaling from "./Pages/BookCollection/ComputerProgramming";
import { Routes, Route } from "react-router-dom";
import Book from "./Pages/BookCollection/Book";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SingUp";
import ProductDetails from "./Pages/Products/ProductDetails";
import Product2Details from "./Pages/Products2/Product2Details";
import Product3Details from "./Pages/Products3/Product3Details";
import Product4Details from "./Pages/Products4/Product4Details";
import Product5Details from "./Pages/Products5/Product5Details";
import Product6Details from "./Pages/Products6/Product6Details";
import Products3All from "./Pages/Products3/Product3All";
import Product3AllDetails from "./Pages/Products3/Product3AllDetails";
import Product3Summary from "./Pages/Products3/Product3Summary";
import AddToCart from "./Pages/AddToCart/AddToCart";
import Shipping from "./Pages/Shipping/Shipping";
import Order from "./Pages/Order/Order";
import ShoppingCart from "./Pages/AddToCart/ShoppingCart";
import Dashboard from "./Dashboard/SideNavbar/Dashboard";
import OrderDetails from "./Pages/Order/OrderDetails";
import SideNavbar from "./Dashboard/SideNavbar/SideNavbar";
import CategoryAdd from "./Dashboard/Admin/Category/CategoryAdd";
import WriterAdd from "./Dashboard/Admin/Writer/WriterAdd";
import Publication from "./Dashboard/Admin/Publication/Publication";
import BookFair from "./Dashboard/Admin/BookFair/BookFair";
import Coupon from "./Dashboard/Admin/Coupon/Coupon";
import Category from "./Pages/Categorys/Category";
import CategoryDetails from "./Pages/Categorys/CategoryDetails";
import OrderManagePage from "./Dashboard/Admin/OrderMange/OrderManagePage";
import ResetPasssword from "./Pages/Login/ResetPasssword";
import ReviewMange from "./Dashboard/Admin/ReviewMange/ReviewMange";
import ProductManage from "./Dashboard/Admin/AddProduct/ProductManage";
import AllDormioBooks from "./Pages/IslamicBooks/AllDormioBooks";
import AllSisuKisorBooks from "./Pages/SisuKisorBooks/AllSisuKisorBooks";
import AllPackgageBooks from "./Pages/PackageBooks/AllPackgageBooks";
import AllTechnolgyBooks from "./Pages/TechnologyBooks/AllTechnolgyBooks";
import Publications from "./Pages/publications/Publications";
import PublicationDetails from "./Pages/publications/PublicationDetails";
import Writers from "./Pages/Writers/Writers";
import WriterDetails from "./Pages/Writers/WriterDetails";
import BannerAdd from "./Dashboard/Admin/Banner/BannerAdd";
import UpComming from "./Pages/UpComming/UpComming";
import Error from "./Pages/Error/Error.jsx";
import UserProfile from "./Dashboard/UserProfile/UserProfile";
import Support from "./Dashboard/Support/Support";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/book" element={<Book></Book>}></Route>
        <Route path="/PreOrder" element={<PreOrder></PreOrder>}></Route>
        <Route
          path="/ComputerProgramming"
          element={<ComputerProgramming></ComputerProgramming>}
        ></Route>
        <Route
          path="/MarketingSaling"
          element={<MarketingSaling></MarketingSaling>}
        ></Route>
        <Route path="/English" element={<English></English>}></Route>
        <Route path="/General" element={<General></General>}></Route>
        <Route
          path="/Engineering"
          element={<Engineering></Engineering>}
        ></Route>
        <Route
          path="/EngineeringJob"
          element={<EngineeringJob></EngineeringJob>}
        ></Route>
        <Route
          path="/AdmissionGuide"
          element={<AdmissionGuide></AdmissionGuide>}
        ></Route>
        <Route
          path="/EducationResearch"
          element={<EducationResearch></EducationResearch>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SignUp></SignUp>}></Route>
        <Route path="/reset-password" element={<ResetPasssword />}></Route>
        <Route
          path="/summary"
          element={<Product3Summary></Product3Summary>}
        ></Route>
        <Route
          path="/productDetails/:detailsId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/product2Details/:details2Id"
          element={<Product2Details></Product2Details>}
        ></Route>

        <Route
          path="/product3Details/:details3Id"
          element={<Product3Details></Product3Details>}
        ></Route>
        <Route
          path="/product4Details/:details4Id"
          element={<Product4Details></Product4Details>}
        ></Route>
        <Route
          path="/product5Details/:details5Id"
          element={<Product5Details></Product5Details>}
        ></Route>
        <Route
          path="/product6Details/:details6Id"
          element={<Product6Details></Product6Details>}
        ></Route>
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
        <Route
          path="/week-best-sale-all"
          element={<Product3AllDetails></Product3AllDetails>}
        ></Route>
        <Route
          path="/all-dormio-books/:islamicId"
          element={<AllDormioBooks></AllDormioBooks>}
        ></Route>
        <Route
          path="/all-sisu-books/:sisuId"
          element={<AllSisuKisorBooks />}
        ></Route>
        <Route path="/all-package-books" element={<AllPackgageBooks />}></Route>
        <Route
          path="/all-technology-books/:technologyId"
          element={<AllTechnolgyBooks />}
        ></Route>
        <Route path="" element={<AddToCart></AddToCart>}></Route>

        <Route
          path="/nonTeckAll"
          element={<Products3All></Products3All>}
        ></Route>
        {/* Shipping Routes */}
        <Route path="/shipping" element={<Shipping></Shipping>}></Route>
        {/* bisoybittik routes */}
        <Route path="/category" element={<Category />}></Route>
        <Route
          path="/category/:categoryDetailsId"
          element={<CategoryDetails></CategoryDetails>}
        ></Route>
        <Route path="/publication" element={<Publications />}></Route>
        <Route
          path="/publication/:publicationDetailsId"
          element={<PublicationDetails />}
        ></Route>
        <Route path="/writer" element={<Writers />}></Route>
        <Route
          path="/writer/:writerDetailsId"
          element={<WriterDetails />}
        ></Route>

        <Route
          path="/order/:orderDetailsId"
          element={<OrderDetails></OrderDetails>}
        ></Route>

        <Route path="/side-navbar" element={<SideNavbar></SideNavbar>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route
            path="user-profile"
            element={<UserProfile></UserProfile>}
          ></Route>
          <Route path="support" element={<Support></Support>}></Route>
          <Route path="product-page" element={<ProductManage />}></Route>
          <Route
            path="category-add"
            element={<CategoryAdd></CategoryAdd>}
          ></Route>
          <Route path="writer-add" element={<WriterAdd></WriterAdd>}></Route>
          <Route
            path="publication-add"
            element={<Publication></Publication>}
          ></Route>
          <Route path="book-fair-add" element={<BookFair></BookFair>}></Route>
          <Route path="coupon-add" element={<Coupon></Coupon>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route path="order-manage" element={<OrderManagePage />}></Route>
          <Route path="review-manage" element={<ReviewMange />}></Route>
          <Route path="banner-add" element={<BannerAdd />}></Route>
        </Route>
        <Route path="/up-comming" element={<UpComming />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
