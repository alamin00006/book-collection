import React from "react";

import Banner from "../Banner/Banner";
import DormioBooks from "../IslamicBooks/DormioBooks";
import PackageBooks from "../PackageBooks/PackageBooks";
import Payment from "../Payment/Payment";
import Products from "../Products/Products";
import Products2 from "../Products2/Products2";
import Products3 from "../Products3/Products3";
import Products4 from "../Products4/Products4";
import Products5 from "../Products5/Products5";
import Products6 from "../Products6/Products6";
import SisuKisorBooks from "../SisuKisorBooks/SisuKisorBooks";
import TechnologyBook from "../TechnologyBooks/TechnologyBook";
const Home = ({ AddToCarts }) => {
  return (
    <div className="container">
      <Banner></Banner>

      <Products3 AddToCarts={AddToCarts}></Products3>
      <DormioBooks AddToCarts={AddToCarts}></DormioBooks>
      <SisuKisorBooks AddToCarts={AddToCarts}></SisuKisorBooks>
      <PackageBooks AddToCarts={AddToCarts}></PackageBooks>
      <TechnologyBook AddToCarts={AddToCarts}></TechnologyBook>

      <Payment></Payment>
    </div>
  );
};

export default Home;
