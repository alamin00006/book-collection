import React from "react";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import { Button } from "react-bootstrap";
import EditIcon from "../../../svgIcons/EditIcon";

const PublicationTable = ({
  publication,
  index,
  refetch,
  setPublicationEdit,
  handleShowEditPublication,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{publication?.name}</td>
      <td>{publication?.products?.length}</td>

      <td>
        <div className="d-flex align-items-center justify-content-center">
          <div onClick={() => setPublicationEdit(publication)}>
            <Button className="edit-icon" onClick={handleShowEditPublication}>
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

export default PublicationTable;
