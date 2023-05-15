import React, { useState } from "react";
import Product3Summary from "./Product3Summary";
import Product3Specification from "./Product3Specification";
import Product3Author from "./Product3Author";
import Reviews from "../Reviews/Reviews";
const Product3ToggleButton = ({
  singleProduct3,
  setReview,
  approvedReviews,
}) => {
  // const [reviews, setReview] = useState([]);
  const [showSummary, setShowSummary] = useState(true);
  const [showSpecification, setShowSpecification] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  let toggleClassCheck1 = isActive1 ? "active" : "";
  let toggleClassCheck2 = isActive2 ? "active" : "";
  let toggleClassCheck3 = isActive3 ? "active" : "";
  let toggleClassCheck4 = isActive4 ? "active" : "";
  const productReviews = approvedReviews?.filter(
    (pReview) => pReview?.forProduct === singleProduct3?._id
  );
  return (
    <div>
      <button
        className={`summary ${toggleClassCheck1}`}
        onClick={() => {
          return (
            setShowSummary(true),
            setShowSpecification(false),
            setShowAuthor(false),
            setShowReview(false),
            setIsActive1(true),
            setIsActive2(false),
            setIsActive3(false),
            setIsActive4(false)
          );
        }}
        style={{
          border: "none",
        }}
      >
        সারসংক্ষেপ
      </button>
      <button
        className={`specification ${toggleClassCheck2}`}
        onClick={() => {
          return (
            setShowSummary(false),
            setShowSpecification(true),
            setShowAuthor(false),
            setShowReview(false),
            setIsActive1(false),
            setIsActive2(true),
            setIsActive3(false),
            setIsActive4(false)
          );
        }}
        style={{
          border: "none",
        }}
      >
        পণ্যের বিবরণ
      </button>
      <button
        className={`author ${toggleClassCheck3}`}
        onClick={() => {
          return (
            setShowSummary(false),
            setShowSpecification(false),
            setShowAuthor(true),
            setShowReview(false),
            setIsActive1(false),
            setIsActive2(false),
            setIsActive3(true),
            setIsActive4(false)
          );
        }}
        style={{
          border: "none",
        }}
      >
        লেখক
      </button>
      <button
        className={`customer-review ${toggleClassCheck4}`}
        onClick={() => {
          return (
            setShowSummary(false),
            setShowSpecification(false),
            setShowAuthor(false),
            setShowReview(true),
            setIsActive1(false),
            setIsActive2(false),
            setIsActive3(false),
            setIsActive4(true)
          );
        }}
        style={{
          border: "none",
        }}
      >
        পর্যালোচনা ({productReviews.length})
      </button>
      {showSummary ? (
        <Product3Summary singleProduct3={singleProduct3}></Product3Summary>
      ) : null}
      {showSpecification ? (
        <Product3Specification
          singleProduct3={singleProduct3}
        ></Product3Specification>
      ) : null}
      {showAuthor ? (
        <Product3Author singleProduct3={singleProduct3}></Product3Author>
      ) : null}
      {showReview ? (
        <Reviews
          singleProduct3={singleProduct3}
          setReview={setReview}
          approvedReviews={approvedReviews}
        ></Reviews>
      ) : null}
    </div>
  );
};

export default Product3ToggleButton;
