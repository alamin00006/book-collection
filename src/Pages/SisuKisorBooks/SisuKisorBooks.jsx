import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

import Loading from "../Loading/Loading";
import OwlCarousel from "react-owl-carousel";
import NoSlideCart from "../AddToCart/NoSlideCart";
const SisuKisorBooks = () => {
  const [myProducts3, refetch, isLoading] = useProduct3();
  const [sisuKisorBooks, setSisoKisorBooks] = useState([]);
  useEffect(() => {
    const sisuBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "শিশু-কিশোর বই"
    );
    setSisoKisorBooks(() => sisuBook);
    refetch();
  }, [myProducts3, refetch]);

  // console.log(sisuKisorBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const allSisuBookId = (_id) => {
    navigate(`/all-sisu-books/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  const options = {
    loop: true,
    marginLeft: 30,
    nav: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };
  return (
    <div className=" card-area bg-white px-3 mt-3 ">
      <div className=" ">
        <h4 className=" pt-3"> শিশু-কিশোর বই</h4>
      </div>
      <hr style={{ color: "#13856B" }} />
      <div className="mt-3">
        {sisuKisorBooks?.length > 4 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {sisuKisorBooks?.map((data, index) => (
              <Cart key={data._id} data={data}></Cart>
            ))}
          </OwlCarousel>
        ) : (
          <div className="my-card-main my-card">
            {sisuKisorBooks?.map((data, index) => (
              <NoSlideCart key={data._id} data={data}></NoSlideCart>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center py-4">
        {" "}
        {sisuKisorBooks?.length > 5 ? (
          <h6
            onClick={() =>
              allSisuBookId(sisuKisorBooks?.[0]?.category?.category_id)
            }
            style={{
              backgroundColor: "#f29434",
              borderRadius: "3px",
              padding: "10px 20px",
            }}
          >
            <Link
              className=" text-decoration-none"
              style={{
                fontSize: "1rem",
                color: "white",
              }}
              to={`/all-technology-books/${sisuKisorBooks?.[0]?.category?.category_id}`}
            >
              এ বিষয়ের সকল বই
            </Link>
          </h6>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SisuKisorBooks;
