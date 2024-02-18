import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Slider from "react-slick";
import "./DormioBooks.css";
import Loading from "../Loading/Loading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const DormioBooks = () => {

  const [myProducts3, refetch, isLoading] = useProduct3();
  const [dormioBooks, setDormioBooks] = useState([]);
  const [lastSlideIndex, setLastSlideIndex] = useState(0);
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



  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
   
  //     return  <MdKeyboardArrowRight   {...props}/>
  //     ;
    
  // };

  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
 
  //     return <MdKeyboardArrowLeft   {...props} style={{
  //       width:"20px", height:"20px"
  //     }}/>;
    
  // };
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

  return (
    <div className="container card-area bg-white px-3 mt-3">
      <div className=" ">
        <h4 className=" pt-3">ধর্মীয় বই</h4>
        
        
      
      </div>
      <hr style={{color:'#13856B'}}/>
      <div className="mt-3   ">
       
             <Slider {...settings}>
             { dormioBooks?.map((data, index) => (
            
            <Cart key={data._id} data={data} ></Cart>
    
       ))
    }

             </Slider>
           
        
      </div>
     
      <div className="d-flex justify-content-center py-4">
          {" "}
          <h6
            onClick={() =>
              allIslamicBookId(dormioBooks?.[0]?.category?.category_id)
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
              to={`/all-dormio-books/${dormioBooks?.[0]?.category?.category_id}`}
            >
              এ বিষয়ের সকল বই
            </Link>
          </h6>
        </div> 
    </div>
  );
};

export default DormioBooks;
