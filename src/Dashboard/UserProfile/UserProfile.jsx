import React, { useEffect } from "react";
import useUser from "../../Hooks/useUser";

const UserProfile = () => {
  const token = localStorage.getItem("token");
  const [user, refetch] = useUser();

  useEffect(() => {
    if (!user?.email && !token) {
      refetch();
    }
  }, [user, refetch, token]);
  return (
    <div className="container p-5">
      <h3 className="mb-5">আপনার অ্যাকাউন্টের বিবরণ</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <label>পুরো নাম</label>
          <input
            type="text"
            value={token && user ? user?.name : "Your Name"}
            name=""
            id=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <label>ইমেইল </label>
          <input
            type="text"
            value={token && user ? user?.email : "Your email"}
            name=""
            id=""
          />
        </div>
      </div>
      <h3 className="mb-5 mt-5">পাসওয়ার্ড পরিবর্তন</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <label>বর্তমান পাসওয়ার্ড</label>
          <input type="text" placeholder="বর্তমান পাসওয়ার্ড" name="" id="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <label>নতুন পাসওয়ার্ড </label>
          <input type="text" placeholder="নতুন পাসওয়ার্ড" name="" id="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <label>নতুন পাসওয়ার্ড নিশ্চিত করুন </label>
          <input
            type="text"
            placeholder="নতুন পাসওয়ার্ড নিশ্চিত করুন"
            name=""
            id=""
          />
          <div className="mt-3">
            <div>
              <input
                disabled
                className="btn btn-danger"
                type="submit"
                value="পরিবর্তন করুন"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
