import './App.css';
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Payment from './Pages/Payment/Payment';
import Products from './Pages/Products/Products';
import Products2 from './Pages/Products2/Products2';
import Products3 from './Pages/Products3/Products3';
import Products4 from './Pages/Products4/Products4';
import Products5 from './Pages/Products5/Products5';
import Products6 from './Pages/Products6/Products6';

function App() {
  return (
    <div>
      <Home></Home>
      <Banner></Banner>
      <Products></Products>
      <Products2></Products2>
      <Products3></Products3>
      <Products4></Products4>
      <Products5></Products5>
      <Products6></Products6>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
}

export default App;
