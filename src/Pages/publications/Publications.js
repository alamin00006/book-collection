import React from "react";
import { useNavigate } from "react-router-dom";
import "../Categorys/Category.css";
import usePublications from "../../Hooks/usePublications";
import Loading from "../Loading/Loading";
import { IoSearch } from "react-icons/io5";
import publicationLogo from '../../Images/defaultPublicationLogo.png'
const Publications = () => {
  const [publications, refetch, isLoading] = usePublications();
  const navigate = useNavigate();
  const publicationDetails = (_id) => {
    navigate(`/publication/${_id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white container">
    <div className="my-3 ">
         <h3 style={{
           fontSize:"1.2rem"
         }}>সকল প্রকাশক</h3>
        <div className="search-field2">

        <input type="text" placeholder="প্রকাশক অনুসন্ধান করুন" style={{
             width:"250px",
             height:"30px",
             borderRadius:0
           }} />
         <span className="search-button2 px-3 ">
             {" "}
             <IoSearch
               className=" font-bold"
               style={{ color: "white", width: "16px", height: "16px" }}
             />
           </span>
        </div>
           
       </div>
   <div className="writer_list mt-2" >
   {publications?.data?.map((publication) => (
     <div key={publication._id} className=" border" >
       <div className="text-center mb-2"  onClick={() => publicationDetails(publication._id)} style={{
         cursor:"pointer"
       }}>
         <img
           style={{
             width: "150px",
             height: "120px"
           }}
           src={publicationLogo}
           alt=""
         />
       </div>
       <h5
         onClick={() => publicationDetails(publication._id)}
         className="px-2 py-1 d-flex justify-content-center "
       >
         {publication.name }  
     
       </h5>
     <div className="d-flex justify-content-center mb-2">

     <div>
     <button className="btn border" style={{
       backgroundColor:"#12856a",
       color:"white"
     }} onClick={() => publicationDetails(publication._id)}>সকল বই</button>
       <button className="btn border ms-2"  onClick={() => publicationDetails(publication._id)}>{
           publication?.products?.length >0 ? <span>{`(${publication?.products?.length} টি বই)`}</span>:"0 বই " }</button>
     </div>
     </div>
     </div>
   ))}
 </div>
 </div>
  );
};

export default Publications;
