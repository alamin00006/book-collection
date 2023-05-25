import React from "react";
import { Table } from "react-bootstrap";

const Product3Specification = ({ singleProduct3 }) => {
  return (
    <div className="mt-3">
      <Table striped bordered hover size="lg" responsive>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Translator</td>
            <td>Publisher</td>

            <td>Country</td>
            <td>Language</td>
          </tr>
          <tr>
            <td>{singleProduct3?.nameB}</td>
            <td>{singleProduct3?.writer?.writerName}</td>
            <td>{singleProduct3?.bookTranslator}</td>
            <td>{singleProduct3?.publication?.publicationName}</td>
            <td>বাংলাদেশ</td>
            <td>বাংলা</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Product3Specification;
