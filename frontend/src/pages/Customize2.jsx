import React, { useContext, useState } from "react";
import { userDataContext } from "../context/userContext";
import axios from "axios";

const Customize2 = () => {
  const { userData, backendImage, selectedImage, serverUrl, setUserData } = useContext(userDataContext);
  const [assistantName, setAssistantName] = useState(userData?.AssistantName || "");

  const handleUpdateAssistant = async () => {
    try {
      let formData = new FormData();
      formData.append("assistantName", assistantName);
      if (backendImage) {
        formData.append("assistantImage", backendImage);
      } else {
        formData.append("imageUrl", selectedImage);
      }

      const result = await axios.post(`${serverUrl}/api/user/update`, formData, { withCredentials: true });
      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-[#010007] to-[#020242] flex flex-col items-center justify-center px-6 sm:px-10">
      <h1 className="text-white mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center drop-shadow-md">
        Enter Your <span className="text-blue-400">Assistant Name</span>
      </h1>

      <input
        type="text"
        required
        onChange={(e) => setAssistantName(e.target.value)}
        value={assistantName}
        placeholder="Enter Assistant Name, e.g. Simba"
        className="w-full max-w-md px-5 py-3 text-lg outline-none border-2 border-white bg-transparent 
                   text-white placeholder-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 transition-all"
      />

      {assistantName && (
        <button
          onClick={()=>handleUpdateAssistant()}
          className="w-full max-w-[250px] h-12 mt-6 rounded-full font-semibold text-gray-800 
                     bg-white cursor-pointer hover:bg-blue-200 transition-all"
        >
          Create Your Assistant
        </button>
      )}
    </div>
  );
};

export default Customize2;