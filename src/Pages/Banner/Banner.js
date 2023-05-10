import React from "react";

import "../Banner/Banner.css";
import useBanner from "../../Hooks/useBanner";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  const [allBanner] = useBanner();
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container banner-part">
      <div>
        <Slider {...settings} className="mySwiper">
          {allBanner?.data.map((banner) => (
            <div className="slider">
              <img
                src={`https://book-server-sg0u.onrender.com/${banner?.image}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="row second-banner mt-4">
        <div className="col-lg-4 col-md-4 col-sm-12">
          {/* Islamic Book */}
          <Link to="/up-comming">
            {" "}
            <img
              src="https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          {/* top selling Book */}
          <Link to="/up-comming">
            <img
              src="https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          {/* Programming Book */}
          <Link to="/up-comming">
            <img
              src="https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
