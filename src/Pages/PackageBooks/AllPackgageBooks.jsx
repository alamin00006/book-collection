import React, { useEffect, useState } from "react";
import useProduct3 from "../../Hooks/UseProduct3";
import Cart from "../AddToCart/Cart";
import NoSlideCart from "../AddToCart/NoSlideCart";
import Loading from "../Loading/Loading";

const AllPackgageBooks = () => {
  const [myProducts3, refetch, isLoading] = useProduct3();
  const [packageBooks, setPackageBook] = useState([]);

  useEffect(() => {
    const packageBooks = myProducts3?.data?.filter(
      (packegeBook) => packegeBook?.category?.categoryName === "প্যাকেজ বই"
    );
    setPackageBook(packageBooks);
    refetch();
  }, [myProducts3, refetch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white">
      <div className="custom-container border">
        <h4 className="bg-white p-3">প্যাকেজ বইসমূহ</h4>

        <div className="bg-dark text-white d-flex justify-content-center align-items-center rounded">
          <div className="p-5">
            {packageBooks?.length > 0 ? (
              <>
                <h4> মোট {packageBooks?.length} টি বই পাওয়া গেছে</h4>
              </>
            ) : (
              <h4> কোন বই খুঁজে পাওয়া যায়নি</h4>
            )}
          </div>
        </div>

        <div className="my-card-main my-card mt-2">
          {packageBooks?.map((data, index) => (
            <NoSlideCart key={data._id} data={data}></NoSlideCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPackgageBooks;
