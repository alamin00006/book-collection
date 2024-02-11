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
    <div className="bg-white mb-3">
      <div className="">
        <div className="home_page_category mt-2 g-2">
          {categories?.data?.slice(0, 10)?.map((category) => (
            <div key={category._id} className="">
              <h5
                onClick={() => categoryDetails(category._id)}
                className=" btn-style border  py-3 d-flex justify-content-center align-items-center"
                style={{
                  fontSize: "1rem",
                  borderColor: "#12856b",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class=" svg-style"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span> {category.name}</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
