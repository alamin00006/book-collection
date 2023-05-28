import { Link } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import "../Products2/Products2.css";
import Cart from "../AddToCart/Cart";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const PackageBooks = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

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
  const [myProducts3] = useProduct3();
  const [packageBooks, setPackageBooks] = useState([]);

  useEffect(() => {
    const weekBestSales = myProducts3?.data?.filter(
      (weekSale) => weekSale?.BookSalesInfo === "প্যাকেজ বই"
    );
    setPackageBooks(weekBestSales);
  }, [myProducts3]);

  return (
    <div className="container card-area bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0" style={{ fontSize: "1.3rem" }}>
          প্যাকেজ বই
        </h4>
        <div className="text-center">
          {" "}
          <Link className="my-button text-black" to="/all-package-books">
            আরও দেখুন
          </Link>
        </div>
      </div>
      <Slider {...settings}>
        {packageBooks?.map((data, index) => (
          <div className="my-card-main my-card">
            <Cart key={data._id} data={data}></Cart>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageBooks;
