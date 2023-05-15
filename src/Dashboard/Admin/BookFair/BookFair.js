import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useBookFairs from "../../../Hooks/useBookFair";

const BookFair = () => {
  const [bookfairs, refetch] = useBookFairs();

  const bookFair = bookfairs?.data[0];

  const handleBookFairUpdate = async (e) => {
    e.preventDefault();
    const bookFairAdd = {
      bookFairYear: e.target.bookFairYear.value,
    };

    try {
      const data = await axios.patch(
        `https://book-server-sg0u.onrender.com/api/v1/book-fair/${bookFair?._id}`,
        bookFairAdd
      );

      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }

    e.target.reset();
  };

  return (
    <div className="product-info ">
      <h2 className="text-center p-5 text-white">Book Fair Year Update</h2>
      <form onSubmit={handleBookFairUpdate} className="category-form">
        <div className="">
          <div>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="bookFairYear"
              className="rounded fs-5"
              defaultValue={bookFair?.bookFairYear}
            />
            <input
              style={{ width: "100%", height: "60px" }}
              className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Book Fair Update"
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookFair;
