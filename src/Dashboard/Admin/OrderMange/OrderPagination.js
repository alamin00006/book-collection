import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
const OrderPagination = () => {

let active = 2;
let items = [];
for (let number = 1; number <= 20; number++) {

  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
    return (
        <div>
             <Pagination>{items}</Pagination>
        </div>
    );
};

export default OrderPagination;