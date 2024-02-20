import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

import "./DormioBooks.css";
import Loading from "../Loading/Loading";

import OwlCarousel from "react-owl-carousel";
import NoSlideCart from "../AddToCart/NoSlideCart";
const DormioBooks = () => {
  const [myProducts3, refetch, isLoading] = useProduct3();
  const [dormioBooks, setDormioBooks] = useState([]);

  useEffect(() => {
    const dormioBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "ধর্মীয় বই"
    );

    setDormioBooks(() => dormioBook);
    refetch();
  }, [myProducts3, refetch]);

  // console.log(dormioBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const allIslamicBookId = (_id) => {
    navigate(`/all-dormio-books/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }

  const options = {
    loop: true,
    marginLeft: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="custom-container card-area bg-white px-3 mt-3 ">
      <div className=" ">
        <h4 className=" pt-3">ধর্মীয় বই</h4>
      </div>
      <hr style={{ color: "#13856B" }} />
      <div className="mt-3 ">
        {dormioBooks?.length > 5 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {dormioBooks?.map((data, index) => (
              <Cart key={data._id} data={data}></Cart>
            ))}
          </OwlCarousel>
        ) : (
          <div className="my-card-main my-card">
            {dormioBooks?.map((data, index) => (
              <NoSlideCart key={data._id} data={data}></NoSlideCart>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center pt-0 pb-2">
        {" "}
        {dormioBooks?.length > 0 ? (
          <h6
            onClick={() =>
              allIslamicBookId(dormioBooks?.[0]?.category?.category_id)
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
              to={`/all-dormio-books/${dormioBooks?.[0]?.category?.category_id}`}
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

export default DormioBooks;
