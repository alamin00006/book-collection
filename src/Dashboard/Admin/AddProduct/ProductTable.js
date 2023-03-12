import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import DetailsIcon from "../../../svgIcons/DetailsIcon";
import EditIcon from "../../../svgIcons/EditIcon";
import "./ProductTable.css";

const ProductTable = ({
  refetch,
  setEditProduct,
  setProductDetails,
  product,
  index,
  handleShowEdit,
  handleShowDetails,
  setDeleteProduct,
  productDelete,
}) => {
  // console.log(productDelete)
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/v1/product/${productDelete?._id}`,
        {
          data: {
            image: productDelete.image,
            productPdf: productDelete.productPdf,
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
      return toast.error(error.response.data.message);
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product?.nameB}</td>
      <td>{product?.category?.categoryName}</td>
      <td>{product?.quantity}</td>
      <td>{product?.price}</td>
      <td className="text-center" onClick={() => setProductDetails(product)}>
        <Button className="details-icon" onClick={handleShowDetails}>
          <span>
            <DetailsIcon />
          </span>
        </Button>
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <div onClick={() => setEditProduct(product)}>
            <Button className="edit-icon" onClick={handleShowEdit}>
              <span>
                <EditIcon />
              </span>
            </Button>
          </div>
          <div onClick={setDeleteProduct(product)} className="ms-5">
            <span onClick={handleDelete} className="delete-icon">
              <DeleteIcon />
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
