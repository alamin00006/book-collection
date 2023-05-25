import React, { useState } from "react";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import { Button } from "react-bootstrap";
import EditIcon from "../../../svgIcons/EditIcon";

const WriterTable = ({
  writer,
  index,
  refetch,
  setWriterEdit,
  handleShowEditWriter,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{writer?.name}</td>
      <td>
        <p>{writer?.writerDetails}</p>
      </td>
      <td>{writer?.products?.length}</td>

      <td>
        <div className="d-flex align-items-center justify-content-center">
          <div onClick={() => setWriterEdit(writer)}>
            <Button className="edit-icon" onClick={handleShowEditWriter}>
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

export default WriterTable;
