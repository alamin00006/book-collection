import React from 'react';
import Table from 'react-bootstrap/Table';
const UserOrder = ({data}) => {
    // console.log(data.cartItems
    //     );
    return (
        <div>
       <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Data</th>
          <th>State</th>
          <th>Tk</th>
          <th>Payment Method</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data._id}</td>
          <td>date</td>
          <td>Processing</td>
          <td>{data.cartTotalAmount}</td>
          <td>Nagad</td>
          <td>See Details</td>
        </tr>
        </tbody>
    </Table>
         
        </div>
    );
};

export default UserOrder;