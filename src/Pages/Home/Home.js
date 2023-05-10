import React from "react";

import Banner from "../Banner/Banner";
import DormioBooks from "../IslamicBooks/DormioBooks";
import PackageBooks from "../PackageBooks/PackageBooks";
import Payment from "../Payment/Payment";
// import Products3 from "../Products3/Products3";
import SisuKisorBooks from "../SisuKisorBooks/SisuKisorBooks";
import TechnologyBook from "../TechnologyBooks/TechnologyBook";
const Home = ({ AddToCarts }) => {
  return (
    <div className="container">
      <Banner></Banner>

      {/* <Products3 AddToCarts={AddToCarts}></Products3> */}
      <DormioBooks AddToCarts={AddToCarts}></DormioBooks>
      <SisuKisorBooks AddToCarts={AddToCarts}></SisuKisorBooks>
      <PackageBooks AddToCarts={AddToCarts}></PackageBooks>
      <TechnologyBook AddToCarts={AddToCarts}></TechnologyBook>

      <Payment></Payment>
    </div>
  );
};

export default Home;
