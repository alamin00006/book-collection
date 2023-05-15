import React from "react";
import { Modal, Table } from "react-bootstrap";
import addProduct from "./Product.module.css";
const DetailsProductModal = ({
  showDetails,
  handleCloseDetails,
  productDetails,
}) => {
  console.log(productDetails);
  return (
    <div className="container">
      <Modal
        className={addProduct.modal}
        show={showDetails}
        onHide={handleCloseDetails}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="">Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="rounded">
          <Table striped size="lg" responsive bordered>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Writer</th>
                <th>publication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productDetails?.nameB}</td>
                <td>{productDetails?.category?.categoryName}</td>
                <td>{productDetails?.writer?.writerName}</td>
                <td>{productDetails?.publication?.publicationName}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailsProductModal;
