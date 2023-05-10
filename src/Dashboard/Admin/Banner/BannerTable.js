import React from "react";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import axios from "axios";
import { toast } from "react-toastify";

const BannerTable = ({ banner, index, refetch }) => {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `https://book-server-sg0u.onrender.com/api/v1/banner/${banner?._id}`,
        {
          data: {
            image: banner.image,
          },
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
      <td>{banner?.image?.split("\\")[2]}</td>

      <td onClick={handleDelete} className="text-center">
        <DeleteIcon />
      </td>
    </tr>
  );
};

export default BannerTable;
