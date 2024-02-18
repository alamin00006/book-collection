import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Slider from "react-slick";
import Loading from "../Loading/Loading";

const TechnologyBook = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    
    adaptiveHeight: true,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
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
  return (
    <div className="container card-area bg-white p-4 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mt-0" style={{ fontSize: "1.3rem" }}>
          টেকনোলজি বই
        </h4>
     
      </div>
      <Slider {...settings}>
        {technologyBooks?.map((data, index) => (
          <div className="" key={data._id}>
            <Cart data={data}></Cart>
          </div>
        ))}
      </Slider>


      <div className="d-flex justify-content-center py-4">
          {" "}
          <h6
             onClick={() =>
              alltechnologyBookId(technologyBooks?.[0]?.category?.category_id)
            }
            style={{backgroundColor:"#12856a", borderRadius:"3px",
          padding:"10px 20px"}}
          >
            <Link
              className=" text-decoration-none"
                style={{
                  fontSize:"1rem",
                  color:"white",
            
                }}
              to={`/all-technology-books/${technologyBooks?.[0]?.category?.category_id}`}
            >
              এ বিষয়ের সকল বই
            </Link>
          </h6>
        </div> 



    </div>
  );
};

export default TechnologyBook;
