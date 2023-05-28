import React from "react";

// import Banner from "../Banner/Banner";
// import DormioBooks from "../IslamicBooks/DormioBooks";
// import PackageBooks from "../PackageBooks/PackageBooks";
// import Payment from "../Payment/Payment";
// import Products3 from "../Products3/Products3";
// import SisuKisorBooks from "../SisuKisorBooks/SisuKisorBooks";
// import TechnologyBook from "../TechnologyBooks/TechnologyBook";
import { lazy } from "react";
import Loadable from "../LazyLoading/Loadable";

const Banner = Loadable(lazy(() => import("../Banner/Banner")));
const DormioBooks = Loadable(lazy(() => import("../IslamicBooks/DormioBooks")));
const SisuKisorBooks = Loadable(
  lazy(() => import("../SisuKisorBooks/SisuKisorBooks"))
);
const PackageBooks = Loadable(
  lazy(() => import("../PackageBooks/PackageBooks"))
);
const TechnologyBook = Loadable(
  lazy(() => import("../TechnologyBooks/TechnologyBook"))
);
const Home = () => {
  return (
    <div className="container">
      <Banner></Banner>

      {/* <Products3 AddToCarts={AddToCarts}></Products3> */}
      <DormioBooks></DormioBooks>
      <SisuKisorBooks></SisuKisorBooks>
      <PackageBooks></PackageBooks>
      <TechnologyBook></TechnologyBook>
      {/* 
      <Payment></Payment> */}
    </div>
  );
};

export default Home;
