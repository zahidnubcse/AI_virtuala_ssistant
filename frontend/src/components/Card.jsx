import React, { useContext } from "react";
import { userDataContext } from "../context/userContext";

const Card = ({ image }) => {
       const {
         serverUrl,
            userData, 
            setUserData,
            frontendImage, 
            setFrontendImage,
            backendImage,
            setBackendImage,
            selectedImage,
            setSelectedImage
       } = useContext(userDataContext)
  return (
    <div
      className={`w-35 mt-4 h-60 bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer
       hover:border-white hover:border-2 ${selectedImage == image ? "border-white border-2 shadow-2xl shadow-blue-950" : null}`}
    onClick={()=>{
      setSelectedImage(image)
      setBackendImage(null)
      setFrontendImage(null)
      
    }} >
      <img src={image} className="w-full h-full object-cover" />
    </div>
  );
};

export default Card;
