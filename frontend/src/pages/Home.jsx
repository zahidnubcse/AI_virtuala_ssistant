import React, { useContext, useEffect } from "react";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate()
  const { userData, serverUrl, setUserData } = useContext(userDataContext);

  const handleLogOut = async ()=>{
     try {
        const result = await axios.get(`${serverUrl}/api/user/logout`,
            {withCredentials:true})
            setUserData(null)
            navigate("/signin")
     } catch (error) {
        setUserData(null)
        console.log(error);
        
     }
  }

useEffect(()=>{
   const SpeechRecognition = window.SpeechRecognition ||window.
   webkitSpeechRecognitionbpeech
   const recognition = new SpeechRecognition()
    recognition.continuose = true;
    recognition.lang = 'en-Us';

    recognition.onresult= (e)=>{
        const transcript = e.results[e.results.length-1] [0].transcript.trim()
        console.log("heard :"+transcript);
        
        
    }

    recognition.start()
   
},[])



  return (
    <div className=" gap-10 w-full h-[100vh]  bg-gradient-to-t from-[#010007] to-[#020242] flex flex-col items-center justify-center">
         <button onClick={handleLogOut} className="absolute top-[20px] right-[20px] w-28 h-12 mt-4 rounded-full font-semibold text-red-700 bg-white cursor-pointer hover:bg-blue-300">
        Sign Out
        </button>
         <button onClick={()=>navigate("/customize")} className="absolute top-[90px] right-[20px] w-50 h-12 items-center justify-center mt-4 rounded-full font-semibold text-black bg-white cursor-pointer hover:bg-blue-300">
        Customize your Assistant
        </button>
      <div className="w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-xl shadow-blue-900/40">
        <img
          src={userData?.assistantImage}
          alt=""
          className="h-full w-full"
        />
      </div>
      <h1 className="text-white font-semibold">
        I'm {userData.assistantName}
      </h1>
    </div>
  );
};

export default Home;
