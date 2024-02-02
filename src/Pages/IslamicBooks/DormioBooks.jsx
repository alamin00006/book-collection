import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import Slider from "react-slick";
import "./DormioBooks.css";
import Loading from "../Loading/Loading";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
  return (
    <div className="container card-area bg-white px-3">
      <div className=" ">
        <h4 className=" pt-3">ধর্মীয় বই</h4>
        
        
      
      </div>
      <hr style={{color:'#13856B'}}/>
      <div className="mt-3 card-splide-slider slider_margin card-slider ">
        <Splide
          options={{
            // type: "loop",
            arrows:
            dormioBooks?.length > 5
                ? true
                : false,
            rewind: true,
            drag: "free",

            // autoplay: true,
            gap: "10px",
            perPage: 5,
            height: "500px",
            pauseOnHover: true,
            pagination: false,
            breakpoints: {
              1200: { arrows: true, perPage: 4 },
              800: { arrows: true, perPage: 2 },
              640: {
                // type: "loop",
                arrows: true,
                perPage: 1,
            
                drag: "free",
                rewind: true,
                // padding: "3rem",
              },
            },
          }}
        >

            { dormioBooks?.map((data, index) => (
                <SplideSlide>
                   <Cart key={data._id} data={data}></Cart>
                </SplideSlide>
              ))
           }
        </Splide>
      </div>
        {/* <div className="text-center ">
          {" "}
          <h6
            onClick={() =>
              allIslamicBookId(dormioBooks?.[0]?.category?.category_id)
            }
          >
            <Link
              className="my-button text-black"
              to={`/all-dormio-books/${dormioBooks?.[0]?.category?.category_id}`}
            >
              আরও দেখুন
            </Link>
          </h6>
        </div> */}
   
    </div>
  );
};

export default DormioBooks;
