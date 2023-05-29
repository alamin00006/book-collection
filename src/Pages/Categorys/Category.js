import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import "./Category.css";
import Loading from "../Loading/Loading";

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
    <div className="bg-white">
      <div className="container product-related-info">
        <div className="row mt-2 g-2">
          {categories?.data?.map((category) => (
            <div key={category._id} className="col-lg-3 col-md-4 col-sm-6">
              <h5
                onClick={() => categoryDetails(category._id)}
                className="category-list px-5 py-2 d-flex justify-content-center align-items-center"
              >
                {category.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
