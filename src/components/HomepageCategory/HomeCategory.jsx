import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import Loading from "../../Pages/Loading/Loading";
import "./HomeCategory.css";

const HomeCategory = () => {
  const [categories, refetch, isLoading] = useCategories();
  const navigate = useNavigate();
  const categoryDetails = (_id) => {
    navigate(`/category/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white ">
      <div className="">
        <div className="home_page_category mt-2 ">
          {categories?.data?.slice(0, 10)?.map((category) => (
            <div key={category._id} className="">
              <h6
                onClick={() => categoryDetails(category._id)}
                className="mb-0 btn-style border  py-3 d-flex justify-content-center align-items-center"
                style={{
             
                  borderColor: "#12856b",
                  cursor: "pointer",
                }}
              >
               
                <span> {category.name}</span>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
