import axios from "axios";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import useBanner from "../../../Hooks/useBanner";
import BannerTable from "./BannerTable";

const BannerAdd = () => {
  const [image, setImage] = useState([]);
  const [allBanner, refetch] = useBanner();

  const handleBannerAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const isValidFileUploaded = (file) => {
      const validExtensions = [
        "png",
        "jpeg",
        "jpg",
        "PNG",
        "JPG",
        "jpeg",
        "JPEG",
        "webp",
      ];
      const fileExtension = file.type.split("/")[1];
      return validExtensions.includes(fileExtension);
    };

    if (image?.length > 3) {
      return toast.error("please provide more than 3 banner picture");
    }
    const file = image[0];
    if (file.size > 5000000) {
      return toast.error("Product Picture size 5MB more than not allowed");
    } else {
      if (isValidFileUploaded(file)) {
        Array.from(image).forEach((item) => {
          formData.append("image", item);
        });
      } else {
        return toast.error("Banner Picture is not valid");
      }
    }

    try {
      const data = await axios.post(
        "https://book-server-sg0u.onrender.com/api/v1/banner",
        formData
      );

      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.error(error);
    }

    e.target.reset();
  };

  return (
    <>
      <div className="product-info ">
        <h2 className="text-center p-5 text-white">Banner Mannage</h2>
        <form onSubmit={handleBannerAdd} className="category-form">
          <div className="">
            <div>
              <input
                multiple
                onChange={(e) => {
                  setImage(e.target.files);
                }}
                type="file"
                className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
                required
                name="image"
                placeholder="productPicture"
                id=""
              />
              <input
                style={{ width: "100%", height: "60px" }}
                className=" rounded text-black fw-bolder fs-5 mt-1"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
      <Table striped bordered hover={false} size="lg" responsive>
        <thead>
          <tr>
            <th>#</th>

            <th>Banner Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBanner?.data.map((banner, index) => (
            <BannerTable banner={banner} index={index} refetch={refetch} />
          ))}
          <ToastContainer className="toast-position" position="top-center" />
        </tbody>
      </Table>
    </>
  );
};

export default BannerAdd;
