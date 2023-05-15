import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./CategoryAdd.css";
import useCategories from "../../../Hooks/useCategories";

const CategoryAdd = () => {
  const [categories, refetch] = useCategories();

  const handleCategoryAdd = async (e) => {
    e.preventDefault();
    const categoryAdd = {
      name: e.target.categoryName.value,
    };

    try {
      const data = await axios.post(
        "https://book-server-sg0u.onrender.com/api/v1/category",
        categoryAdd
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }

    e.target.reset();
  };

  return (
    <div className="product-info ">
      <h2 className="text-center p-5 text-white">Category Add</h2>
      <form onSubmit={handleCategoryAdd} className="category-form">
        <div className="">
          <div>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="categoryName"
              className="rounded fs-5"
              placeholder="Enter Category Name in Bangla"
            />
            <input
              style={{ width: "100%", height: "60px" }}
              className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Category Add"
            />
          </div>
        </div>
      </form>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default CategoryAdd;
