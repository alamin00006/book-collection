import { Link } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import "../Products2/Products2.css";
import Cart from "../AddToCart/Cart";
import { useEffect, useState } from "react";

const Products3 = ({ AddToCarts }) => {
  const [myProducts3] = useProduct3();
  const [weekSales, setWeekSale] = useState([]);

  useEffect(() => {
    const weekBestSales = myProducts3?.data?.filter(
      (weekSale) => weekSale?.BookSalesInfo === "এই সপ্তাহের বেস্ট সেল বুক"
    );
    setWeekSale(weekBestSales);
  }, [myProducts3]);

  return (
    <div className="custom-container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mt-0">এই সপ্তাহের বেস্টসেলার</h3>
        <div className="text-center">
          {" "}
          <Link className="my-button text-black" to="/week-best-sale-all">
            আরও দেখুন
          </Link>
        </div>
      </div>
      <div className="my-card-main my-card">
        {weekSales?.map((data, index) => (
          <Cart key={data._id} data={data} AddToCarts={AddToCarts}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Products3;
