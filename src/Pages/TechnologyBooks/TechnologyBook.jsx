import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";

import Loading from "../Loading/Loading";
import OwlCarousel from "react-owl-carousel";
import NoSlideCart from "../AddToCart/NoSlideCart";
const TechnologyBook = () => {
  const [myProducts3, refetch, isLoading] = useProduct3();
  const [technologyBooks, setTechnolgoyBooks] = useState([]);

  useEffect(() => {
    const techonologyBook = myProducts3?.data?.filter(
      (dormio) => dormio?.category?.categoryName === "টেকনোলজি বই"
    );
    setTechnolgoyBooks(() => techonologyBook);
    refetch();
  }, [myProducts3, refetch]);

  // console.log(technologyBooks?.[0]?.category?.category_id);
  const navigate = useNavigate();

  const alltechnologyBookId = (_id) => {
    navigate(`/all-technology-books/${_id}`);
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
    <div className=" card-area bg-white px-3 mt-3 ">
      <div className=" ">
        <h4 className=" pt-3">টেকনোলজি বই</h4>
      </div>
      <hr style={{ color: "#13856B" }} />

      <div className="mt-3 ">
        {technologyBooks?.length > 4 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {technologyBooks?.map((data, index) => (
              <Cart key={data._id} data={data}></Cart>
            ))}
          </OwlCarousel>
        ) : (
          <div className="my-card-main my-card">
            {technologyBooks?.map((data, index) => (
              <NoSlideCart key={data._id} data={data}></NoSlideCart>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center py-4">
        {technologyBooks?.length > 5 ? (
          <h6
            onClick={() =>
              alltechnologyBookId(technologyBooks?.[0]?.category?.category_id)
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
              to={`/all-technology-books/${technologyBooks?.[0]?.category?.category_id}`}
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

export default TechnologyBook;
