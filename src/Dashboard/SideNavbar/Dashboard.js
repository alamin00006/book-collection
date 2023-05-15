import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { BsQuestionLg } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="mt-5">Dashboard</h2>
      <div className="text-center mt-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              <HiOutlineShoppingBag
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              {" "}
              <MdOutlineLocalShipping
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              <HiOutlineShoppingBag
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              <CgProfile
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              <GiSelfLove
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#065644",
                color: "white",
                borderRadius: "5%",
                padding: "20px",
              }}
            >
              <BsQuestionLg
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
