import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useWriters from "../../../Hooks/useWriters";

const WriterAdd = () => {
  const [writers, refetch] = useWriters();

  const handleWriterAdd = async (e) => {
    e.preventDefault();
    const writerAdd = {
      name: e.target.writerName.value,
    };

    try {
      const data = await axios.post(
        "https://book-server-sg0u.onrender.com/api/v1/writer",
        writerAdd
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
      <h2 className="text-center p-5 text-white">Writer Add</h2>
      <form onSubmit={handleWriterAdd} className="category-form">
        <div className="">
          <div>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="writerName"
              className="rounded fs-5"
              placeholder="Enter Writer Name in Bangla"
            />
            <input
              style={{ width: "100%", height: "60px" }}
              className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Writer Add"
            />
          </div>
        </div>
      </form>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default WriterAdd;
