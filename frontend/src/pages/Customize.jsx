import React, { useContext, useRef } from "react";
import Card from "../components/Card.jsx";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/authBg.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { RiImageAddFill } from "react-icons/ri";
import { userDataContext } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

const Customize = () => {
  const {
    serverUrl,
    userData,
    setuserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage,
    setSelectedImage,
  } = useContext(userDataContext);
  const navigate = useNavigate()

  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };
  const inputImage = useRef();
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-[#010007] to-[#020242] flex flex-col items-center justify-center">
      <h1 className="text-white mt-2 text-3xl md:text-4xl font-semibold mb-10 text-center drop-shadow-md">
        Choose Your <span className="text-blue-400">Assistant image</span>
      </h1>
      <div className="w-[90%] max-w-6xl flex flex-wrap justify-center items-center gap-6">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        <div
          className={`w-35 h-60 bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer
       hover:border-white hover:border-2 flex items-center justify-center ${
         selectedImage == "input"
           ? "border-white border-2 shadow-2xl shadow-blue-950"
           : null
       }`}
          onClick={() => {
            inputImage.current.click();
            setSelectedImage("input");
          }}
        >
          {!frontendImage && <RiImageAddFill className="text-white h-8 w-8" />}
          {frontendImage && (
            <img src={frontendImage} className="h-full object-cover" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputImage}
          onChange={handleImage}
        />
      </div>
      {selectedImage && (
        <button onClick={()=>navigate("/customize2")} className="w-28 h-12 mt-4 rounded-full font-semibold text-black bg-white cursor-pointer hover:bg-blue-200">
          Next
        </button>
      )}
    </div>
  );
};

export default Customize;
