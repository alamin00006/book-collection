import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Slider from "react-slick";
import Loading from "../Loading/Loading";

const SisuKisorBooks = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
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
  return (
    <div className="container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0" style={{ fontSize: "1.3rem" }}>
          শিশু-কিশোর বই
        </h4>
        <div className="text-center">
          {" "}
          <h6
            onClick={() =>
              allSisuBookId(sisuKisorBooks?.[0]?.category?.category_id)
            }
            className="my-button text-black"
          >
            আরও দেখুন
          </h6>
        </div>
      </div>
      <Slider {...settings}>
        {sisuKisorBooks?.map((data, index) => (
          <div className="my-card-main my-card">
            <Cart key={data._id} data={data}></Cart>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SisuKisorBooks;
