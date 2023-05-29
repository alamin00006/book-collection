import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Cart from "../AddToCart/Cart";
import NoSlideCart from "../AddToCart/NoSlideCart";
import Loading from "../Loading/Loading";

const CategoryDetails = () => {
  const { categoryDetailsId } = useParams();
  const [categoryDetails, setCategoryDetails] = useState({});

  const { isLoading, refetch } = useQuery([categoryDetailsId], () =>
    fetch(
      `https://book-collection-server.vercel.app/api/v1/category/${categoryDetailsId}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // Navigate('/');
          // localStorage.removeItem('accessToken')
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setCategoryDetails(data.data);
      })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container bg-white">
      <h4 className="bg-white p-3">{categoryDetails.name}সমূহ</h4>
      <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
        <div className="p-5">
          <h2>{categoryDetails.name}</h2>
          {categoryDetails?.products?.length > 0 ? (
            <>
              <h4>
                {categoryDetails.name} প্রকাশিত মোট{" "}
                {categoryDetails?.products?.length} টি বই পাচ্ছেন আমাদের কাছে
              </h4>
            </>
          ) : (
            <h4>{categoryDetails.name} প্রকাশিত কোন বই খুঁজে পাওয়া যায়নি</h4>
          )}
        </div>
      </div>
      <div className="my-card-main my-card mt-2">
        {categoryDetails?.products?.map((data, index) => (
          <NoSlideCart key={data._id} data={data}></NoSlideCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
