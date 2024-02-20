import React, { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { BsPen } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineGift } from "react-icons/ai";

import { GiVerticalBanner } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import useUser from "../../Hooks/useUser";
import { Link } from "react-router-dom";

const AdminDashbordRoute = () => {
  const token = localStorage.getItem("token");
  const [user, refetch] = useUser();

  useEffect(() => {
    if (!user?.email && !token) {
      refetch();
    }
  }, [user, refetch, token]);

  const SingOutHandle = () => {
    localStorage.removeItem("token");

    // window.location.reload(false);
    refetch();
  };
  return (
    <div className="custom-container">
      {/* User Dashboard */}
      <h3 className="mt-5">ড্যাশবোর্ড</h3>
      <h3 className="mt-5">
        হ্যালো এডমিন {token && user ? user?.name : ""} সাহেব
      </h3>
      <p>
        আপনার অ্যাকাউন্ট ড্যাশবোর্ড থেকে আপনি এই ওয়েবসাইটটি ম্যানেজ করতে
        পারবেন।
      </p>
      <div className=" mt-5 d-flex">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/product-page">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <AiOutlineAppstoreAdd
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  প্রডাক্টস
                </p>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/order-manage">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <HiOutlineShoppingBag
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  অর্ডারস
                </p>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/review-manage">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <HiSparkles
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  রিভিউস
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/category-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <HiMenu
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  ক্যাটাগরি
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/writer-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <BsPen
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  লেখক
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/publication-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <HiOutlineSpeakerphone
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  প্রকাশনী
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/book-fair-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <HiOutlineBookOpen
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  বইমেলা
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/coupon-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <AiOutlineGift
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  কুপন
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/banner-add">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <GiVerticalBanner
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  ব্যানার
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to="/side-navbar/user-profile">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <CgProfile
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  প্রোফাইল
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Link onClick={SingOutHandle} to="/">
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#065644",
                  color: "white",
                  borderRadius: "5%",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <AiOutlineLogout
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="text-center">
                <p
                  className=" fw-bold"
                  style={{
                    color: "#fff",
                    backgroundColor: "#12856a",
                    width: "100%",
                  }}
                >
                  লগ আউট
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbordRoute;
