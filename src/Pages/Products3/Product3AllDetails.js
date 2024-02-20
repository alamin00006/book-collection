import React, { useEffect, useState } from "react";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

const Product3AllDetails = () => {
  const [myProducts3] = useProduct3();
  const [weekSales, setWeekSale] = useState([]);

  useEffect(() => {
    const weekBestSales = myProducts3?.data?.filter(
      (weekSale) => weekSale?.BookSalesInfo === "এই সপ্তাহের বেস্ট সেল বুক"
    );
    setWeekSale(weekBestSales);
  }, [myProducts3]);

  return (
    <div className="bg-white">
      <div className="custom-container border">
        <h4 className="bg-white p-3">এই সপ্তাহের বেস্টসেলার বইসমূহ</h4>

        <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
          <div className="p-5">
            {weekSales?.length > 0 ? (
              <>
                <h4> মোট {weekSales?.length} টি বই পাওয়া গেছে</h4>
              </>
            ) : (
              <h4> কোন বই খুঁজে পাওয়া যায়নি</h4>
            )}
          </div>
        </div>

        <div className="my-card-main my-card mt-2">
          {weekSales?.map((data, index) => (
            <Cart key={data._id} data={data}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product3AllDetails;
