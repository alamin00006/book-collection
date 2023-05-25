import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "./Order.css";
// import useUser from '../../Hooks/useUser';
import axios from "axios";
import Loading from "../Loading/Loading";

const Order = () => {
  // const [user,refetch,isLoading] = useUser();
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  // console.log(user?.email)
  const navigate = useNavigate();
  // const cart = useSelector((state) => state.cart);
  const shipping = 50;
  const [myProducts2, setProducts2] = useState([]);

  const { isLoading, refetch } = useQuery(
    "data",
    async () => {
      const { data } = await axios.get(
        "https://book-collection-server.vercel.app/api/v1/user/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return setUser(data?.data);
    },
    {
      refetchInterval: 6000,
    }
  );

  const { isLoadingOrder, refetchOrder } = useQuery(
    ["myProducts2", user, token, refetch],
    () =>
      fetch(
        `https://book-collection-server.vercel.app/api/v1/order/${user?.email}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts2(data?.data);
          refetch();
        })
  );

  if (isLoading || isLoadingOrder) {
    return <Loading></Loading>;
  }

  const orderDetails = (_id) => {
    navigate(`/order/${_id}`);
  };

  return (
    <div className="container">
      <h4 className="mt-4 fw-bolder">অর্ডার</h4>
      {myProducts2.length <= 0 ? (
        <h5 className="mt-5 text-danger">
          দুঃখিত আপনি আমাদের কাছে এখন পর্যন্ত কোনো অর্ডার করেন নি
        </h5>
      ) : (
        <div className="order-table">
          <Table bordered className="mt-4" size="lg" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>তারিখ</th>
                <th>অবস্থা</th>
                <th>মোট</th>
                <th>মূল্যপরিশোধ পদ্ধতি</th>
                <th>এ্যকশান</th>
              </tr>
            </thead>
            <tbody>
              {myProducts2?.map((data, index) => {
                return (
                  <tr key={data?._id}>
                    <td>{data?._id.slice(13)}</td>
                    <td>{data?.updatedAt.split("T")?.[0]}</td>
                    <td
                      className={`${
                        data?.orderStatus === "Approved"
                          ? "customer-order-status"
                          : "text-white fw-bold bg-danger"
                      }`}
                    >
                      {data?.orderStatus}
                    </td>
                    <td className="fw-bold">
                      Tk {data?.orderItems?.[0]?.cartTotalAmount + shipping}
                    </td>
                    <td>{data?.paymentType}</td>
                    <td
                      className="see-details text-center"
                      onClick={() => orderDetails(data?._id)}
                    >
                      দেখুন
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Order;
