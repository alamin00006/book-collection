import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import "./Category.css";
import Loading from "../Loading/Loading";
import { IoSearch } from "react-icons/io5";

const Category = () => {
  const [categories, refetch, isLoading] = useCategories();
  const navigate = useNavigate();
  const categoryDetails = (_id) => {
    navigate(`/category/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white custom-container">
      <div className="my-3 ">
        <h3
          style={{
            fontSize: "1.2rem",
          }}
        >
          বিষয় সমূহ
        </h3>
        <div className="search-field2">
          <input
            type="text"
            placeholder="বিষয় সমূহ অনুসন্ধান করুন"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: 0,
            }}
          />
          <span className="search-button2 px-3 ">
            {" "}
            <IoSearch
              className=" font-bold"
              style={{ color: "white", width: "16px", height: "16px" }}
            />
          </span>
        </div>
      </div>
      <div className=" mt-2 category_list ">
        {categories?.data?.map((category) => (
          <div
            key={category._id}
            className="category_item_list"
            style={{
              backgroundColor: "#efeeee",
              borderLeft: "5px solid #f29434",
              fontSize: "1rem",
            }}
          >
            <h5
              onClick={() => categoryDetails(category._id)}
              className="mt-2 px-2 py-2 "
            >
              {category.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
