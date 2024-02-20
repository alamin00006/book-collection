import { Link, useNavigate } from "react-router-dom";
import useProduct3 from "../../Hooks/UseProduct3";
import "../Products2/Products2.css";
import Cart from "../AddToCart/Cart";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import NoSlideCart from "../AddToCart/NoSlideCart";
import OwlCarousel from "react-owl-carousel";
const PackageBooks = () => {
  const [myProducts3, refetch, isLoading] = useProduct3();
  const [packageBooks, setPackageBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const packegeBooks = myProducts3?.data?.filter(
      (packegeBook) => packegeBook?.category?.categoryName === "প্যাকেজ বই"
    );
    setPackageBooks(packegeBooks);
    refetch();
  }, [myProducts3, refetch]);
  if (isLoading) {
    return <Loading />;
  }

  const allPackageBooks = (_id) => {
    navigate(`/all-package-books/${_id}`);
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
        <h4 className=" pt-3">প্যাকেজ বই</h4>
      </div>
      <hr style={{ color: "#13856B" }} />
      <div className="mt-3 ">
        {packageBooks?.length > 5 ? (
          <OwlCarousel className="owl-theme" {...options}>
            {packageBooks?.map((data, index) => (
              <Cart key={data._id} data={data}></Cart>
            ))}
          </OwlCarousel>
        ) : (
          <div className="my-card-main my-card">
            {packageBooks?.map((data, index) => (
              <NoSlideCart key={data._id} data={data}></NoSlideCart>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center pt-0 pb-2">
        {" "}
        {packageBooks?.length > 0 ? (
          <h6
            onClick={() =>
              allPackageBooks(packageBooks?.[0]?.category?.category_id)
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
              to={`/all-package-books/${packageBooks?.[0]?.category?.category_id}`}
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

export default PackageBooks;
