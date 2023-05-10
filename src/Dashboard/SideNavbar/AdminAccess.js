import React from "react";
import { Link } from "react-router-dom";
import BookFairIcon from "../../svgIcons/BookFairIcon";
import CategoryIcon from "../../svgIcons/CategoryIcon";
import CouponIcon from "../../svgIcons/CouponIcon";
import OrderIcon from "../../svgIcons/OrderIcon";
import ProductIcon from "../../svgIcons/ProductIcon";
import PublicationIcon from "../../svgIcons/PublicationIcon";
import ReviewIcon from "../../svgIcons/ReviewIcon";
import WriterIcon from "../../svgIcons/WriterIcon";
import BannerIcon from "../../svgIcons/BannerIcons";

const AdminAccess = () => {
  return (
    <div>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div className="">
          <ProductIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/product-page"
            className="text-decoration-none text-black "
          >
            প্রডাক্টস
          </Link>
        </div>
      </li>

      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <OrderIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/order-manage"
            className="text-decoration-none text-black"
          >
            অর্ডারস
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <ReviewIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/review-manage"
            className="text-decoration-none text-black"
          >
            রিভিউস
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <CategoryIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/category-add"
            className="text-decoration-none text-black"
          >
            ক্যাটাগরি
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <WriterIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/writer-add"
            className="text-decoration-none text-black"
          >
            লেখক
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <PublicationIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/publication-add"
            className="text-decoration-none text-black"
          >
            প্রকাশনী
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <BookFairIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/book-fair-add"
            className="text-decoration-none text-black"
          >
            বইমেলা
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <CouponIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/coupon-add"
            className="text-decoration-none text-black"
          >
            কুপন
          </Link>
        </div>
      </li>
      <li className="list-unstyled d-flex align-items-center mt-4">
        <div>
          <BannerIcon />
        </div>
        <div className="ms-2">
          <Link
            to="/side-navbar/banner-add"
            className="text-decoration-none text-black"
          >
            ব্যানার
          </Link>
        </div>
      </li>
    </div>
  );
};

export default AdminAccess;
