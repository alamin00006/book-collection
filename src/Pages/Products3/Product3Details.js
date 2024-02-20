import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product3AllDetails.css";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/outline";
import { TicketIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Product from "../Products/Product";
import Product3Related2 from "./Product3Related2";
import Reviews from "../Reviews/Reviews";
import Product3ToggleButton from "./Product3ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";
import { useQuery } from "react-query";
import ViewPdfModal from "../ViewPdf/ViewPdfModal";
import Cart from "../AddToCart/Cart";
import useProduct3 from "../../Hooks/UseProduct3";
import Slider from "react-slick";
import NoSlideCart from "../AddToCart/NoSlideCart";
import RelatedProductCart from "../RealatedProduct/RelatedProductCart";
import OwlCarousel from "react-owl-carousel";
import Loading from "../Loading/Loading";
const Product3Details = ({ AddToCarts }) => {
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
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [myProducts3] = useProduct3();
  const { details3Id } = useParams();
  const [singleProduct3, setSingleProduct3] = useState({});
  const discount = parseFloat(
    (singleProduct3.price / 100) * singleProduct3.discount
  ).toFixed(2);
  const discountPrice = singleProduct3.price - Math.ceil(discount);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Cart2 = cart.cartItems.find(
    (cartItem) => cartItem._id === singleProduct3._id
  );

  const [reviews, setReview] = useState([]);

  const { isLoading, refetch } = useQuery(
    ["", singleProduct3, details3Id],
    () =>
      fetch(`https://book-collection-server.vercel.app/api/v1/review`, {
        method: "GET",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            // navigate('/');
            // signOut(auth);
            // localStorage.removeItem('accessToken')
          }
          return res.json();
        })
        .then((data) => {
          setReview(data.data);
          // console.log(data.data)
        })
  );
  const approvedReviews = reviews.filter(
    (pReview) => pReview.status === "Approved"
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const url = `https://book-collection-server.vercel.app/api/v1/product/${details3Id}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSingleProduct3(data?.data));
  }, [details3Id]);

  const relatedProduct = myProducts3?.data?.filter(
    (product) =>
      product.category?.categoryName === singleProduct3?.category?.categoryName
  );
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
    <div class="custom-container">
      <div class="details-page">
        <div class="container-fluid details-side">
          <div class="row ">
            <div class="col-lg-4 details-side-1">
              <div class="">
                <div class="tab-pane active" id="pic-1">
                  <img
                    className="details-pic"
                    alt=""
                    src={singleProduct3?.image}
                  />
                </div>
              </div>
            </div>
            <div class="details col-lg-5 details-side-2">
              <h3 class="product-title">{singleProduct3.nameB}</h3>
              <p>
                লেখক :{" "}
                <span className="text-primary">
                  {singleProduct3.writer?.writerName}
                </span>
              </p>
              <div>
                <StarIcon className=" star-icon " />
                <StarIcon className=" star-icon " />
                <StarIcon className=" star-icon " />
                <StarIcon className=" star-icon " />
                <StarIcon className=" star-icon " />
                {/* <span>/ 14 Reviews</span> */}
              </div>
              <p>Publisher : {singleProduct3?.publication?.publicationName}</p>
              {singleProduct3.discount !== 0 ? (
                <p className="previous-tk">TK.{singleProduct3.price}</p>
              ) : (
                ""
              )}
              <p>
                <span className="present-tk text-primary">
                  TK.{discountPrice}
                </span>
                <span className="text-warning save-tk">
                  You save TK.{discount} ({singleProduct3.discount}%)
                </span>
              </p>
              <div className="d-flex">
                <div>
                  <CheckCircleIcon className=" stock-in-icon " />
                </div>
                <p>
                  {singleProduct3.quantity !== 0 ? (
                    <span className="stock-in">In Stock</span>
                  ) : (
                    <span className=" stock-in">Stock Out</span>
                  )}

                  {singleProduct3.quantity !== 0 ? (
                    <span className="text-danger available-quantity">
                      ({singleProduct3.quantity} copies Available)
                    </span>
                  ) : (
                    <span className="text-danger available-quantity">
                      This Product Stock 0{" "}
                    </span>
                  )}
                </p>
              </div>
              <div className="d-flex">
                {/* <div>
                  <button
                    onClick={handleShow}
                    class="reading-button btn btn-default"
                    type="button"
                  >
                    একটু পড়ে দেখুন
                  </button>
                  <ViewPdfModal
                    show={show}
                    setShow={setShow}
                    singleProduct3={singleProduct3}
                  />
                </div> */}
                <div className="d-flex align-items-center add-to-button">
                  <div>
                    <ShoppingCartIcon className="add-to-icon " />
                  </div>
                  <div>
                    {Cart2 ? (
                      <button
                        class="add-to-cart add-To-Cart btn btn-default"
                        type="button"
                      >
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(singleProduct3)}
                        disabled={singleProduct3.quantity === 0 ? true : false}
                        class="add-to-cart add-To-Cart btn btn-default text-white"
                        type="button"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 delivery-info">
              <div className="d-flex">
                <div>
                  <BanknotesIcon className=" cash-icon text-blue-500" />
                </div>
                <p>Cash On Delivery</p>
              </div>
              <div className="d-flex">
                <div>
                  <ArrowPathIcon className=" return-icon text-blue-500" />
                </div>
                <p>7 Days Happy Return</p>
              </div>
              <div className="d-flex">
                <div>
                  <TruckIcon className=" delivery-icon text-blue-500" />
                </div>
                <p>Delivery Charge Tk. 50(Online Order)</p>
              </div>
              <div className="d-flex">
                <div>
                  <TicketIcon className=" earn-icon text-blue-500" />
                </div>
                <p>Purchase & Earn</p>
              </div>
              <div>
                <hr />
                <h5>Related Products</h5>
                {relatedProduct ? (
                  <Product3Related2 relatedProduct={relatedProduct} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Summary Section */}
      <div className="bg-white product-summary-section pb-5 mb-5">
        <div className=" mt-3 py-5 px-4">
          <h5 className="mb-4">Product Specification & Summary</h5>
          <Product3ToggleButton
            singleProduct3={singleProduct3}
            approvedReviews={approvedReviews}
            setReview={setReview}
          />
        </div>
        <hr />
        <h3 className="mb-3 px-4 ">Related Products</h3>

        <div className="mt-3 px-3">
          {relatedProduct?.length > 5 ? (
            <OwlCarousel className="owl-theme" {...options}>
              {relatedProduct?.map((data, index) => (
                <RelatedProductCart
                  key={data._id}
                  data={data}
                  AddToCarts={AddToCarts}
                ></RelatedProductCart>
              ))}
            </OwlCarousel>
          ) : (
            <div className="my-card-main my-card">
              {relatedProduct?.map((data, index) => (
                <NoSlideCart key={data._id} data={data}></NoSlideCart>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product3Details;
