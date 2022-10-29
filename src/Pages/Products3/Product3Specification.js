import React from 'react';
import { Table } from 'react-bootstrap';

const Product3Specification = () => {
    return (
        <div className='mt-3'>
              <Table striped bordered hover size="sm">
        <tbody>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Translator</td>
          <td>Publisher</td>
          <td>Edition</td>
          <td>Number of page</td>
          <td>Country</td>
          <td>Language</td>
        </tr>
        <tr>
          <td>Book Name</td>
          <td>টনি সেহ</td>
          <td>মোহাম্মদ আবদুল লতিফ</td>
          <td>নোভা বুকস অ্যান্ড পাবলিশার্স</td>
          <td>1st Published, 2021</td>
          <td>348</td>
          <td>বাংলাদেশ</td>
          <td>বাংলা</td>
        </tr>
     
      </tbody>
    </Table>
        </div>
    );
};

export default Product3Specification;