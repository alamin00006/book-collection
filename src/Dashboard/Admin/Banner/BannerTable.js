import React from "react";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import axios from "axios";
import { toast } from "react-toastify";

const BannerTable = ({ banner, index, refetch }) => {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/v1/banner/${banner?._id}`,
        {
          // data: {
          //   image: banner.image,
          // },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      refetch();
      return toast.success(data.data.message);
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message);
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          style={{ width: "100px", height: "50px" }}
          src={banner?.image}
          alt="banner"
        />
      </td>

      <td onClick={handleDelete} className="text-center">
        <span style={{ cursor: "pointer" }}>
          <DeleteIcon />
        </span>
      </td>
    </tr>
  );
};

export default BannerTable;
