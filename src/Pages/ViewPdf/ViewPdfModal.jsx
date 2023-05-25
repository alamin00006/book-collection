import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import addProduct from "../../Dashboard/Admin/AddProduct/Product.module.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ViewPdfModal = ({ show, setShow, singleProduct3 }) => {
  const handleClose = () => setShow(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Modal
        className={addProduct.modal}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{singleProduct3?.nameB}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
            <div style={{ height: "750px" }}>
              <Viewer
                fileUrl={`https://book-collection-server.vercel.app/${singleProduct3?.productPdf}`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewPdfModal;
