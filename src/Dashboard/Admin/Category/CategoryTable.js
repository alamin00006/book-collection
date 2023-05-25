import React, { useState } from "react";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import { Button } from "react-bootstrap";
import EditIcon from "../../../svgIcons/EditIcon";

const CategoryTable = ({
  category,
  index,
  refetch,
  setCategoryEdit,
  handleShowEditCategory,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category?.name}</td>
      <td>{category?.products?.length}</td>

      <td>
        <div className="d-flex align-items-center justify-content-center">
          <div onClick={() => setCategoryEdit(category)}>
            <Button className="edit-icon" onClick={handleShowEditCategory}>
              <span>
                <EditIcon />
              </span>
            </Button>
          </div>
          <div className="ms-5">
            <button disabled>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CategoryTable;
