import React, { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsQuestionLg } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import useUser from "../../Hooks/useUser";
import { Link } from "react-router-dom";
import AdminDashbordRoute from "./AdminDashbordRoute";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [user, refetch] = useUser();

  useEffect(() => {
    if (!user?.email && !token) {
      refetch();
    }
  }, [user, refetch, token]);

  const SingOutHandle = () => {
    localStorage.removeItem("token");

    refetch();
  };

  return (
    <div className="container">
      {/*normal User Dashboard Route */}
      {token && user?.role === "Admin" ? (
        <AdminDashbordRoute />
      ) : (
        <>
          <h3 className="mt-5">ড্যাশবোর্ড</h3>
          <h3 className="mt-5">হ্যালো {token && user ? user?.name : ""}</h3>
          <p>
            আপনার অ্যাকাউন্ট ড্যাশবোর্ড থেকে আপনি আপনার সাম্প্রতিক অর্ডারগুলি
            দেখতে পারেন, এবং অ্যাকাউন্টের বিবরণ দেখতে পারেন।
          </p>
          <div className=" mt-5 d-flex">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <Link to="/side-navbar/order">
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
                      অর্ডার
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <Link to="/up-comming">
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
                    <HiHeart
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
                      ইচ্ছেতালিকা
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
                <Link to="/side-navbar/support">
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
                    <BsQuestionLg
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
                      সাপোর্ট
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
        </>
      )}
    </div>
  );
};

export default Dashboard;
