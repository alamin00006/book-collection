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

    if (image?.length > 1) {
      return toast.error("please provide one banner picture");
    }
    const file = image[0];
    const imgbbapi = "76188552c6fc6bf4a3912664a291870a";
    const formData = new FormData();
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
    const url = `https://api.imgbb.com/1/upload?key=${imgbbapi}`;
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgData) => {
        if (imgData.success) {
          const bannerAdd = {
            image: imgData.data.url,
          };

          // save Banner to the database
          try {
            const data = await axios.post(
              "https://book-collection-server.vercel.app/api/v1/banner",
              bannerAdd
            );
            refetch();
            toast.success(data.data.message);
          } catch (error) {
            console.log(error);
            return toast.warn(error.response.data.message);
          }
        }
      });

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
