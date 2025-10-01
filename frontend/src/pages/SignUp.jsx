import React, { useState } from 'react';
import bg from '../assets/authBg.png';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <div 
      className="w-full h-screen bg-cover bg-center flex justify-center items-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="px-10 w-[90%] h-[650px] max-w-[500px] bg-[#00000062] backdrop-blur-md
       shadow-lg shadow-black flex flex-col items-center justify-center gap-5 rounded-2xl">
        
        <h1 className="text-white font-medium text-2xl mb-4">
          Register to <span className="text-teal-500">Virtual Assistant</span>
        </h1>

        <input 
          type="text" 
          required 
          placeholder="Enter your Name" 
          className="w-full px-4 py-2 h-12 outline-none border-2 border-white 
          bg-transparent text-white placeholder-gray-300 rounded-full"
        />

        <input 
          type="email" 
          required 
          placeholder="Email" 
          className="w-full px-4 py-2 h-12 outline-none border-2 border-white 
          bg-transparent text-white placeholder-gray-300 rounded-full"
        />

        <div className="relative w-full h-12">
          <input 
            type= {showPassword ? "text": "password"}
            placeholder="Password" 
            className="w-full h-full outline-none border-2 border-white 
            bg-transparent px-4 py-2 text-white placeholder-gray-300 rounded-full"
          />
          {!showPassword &&  <FaEye onClick={()=>setShowPassword(true)} 
          className="absolute top-1/2 right-5 -translate-y-1/2 text-white cursor-pointer h-20 w-5" />}
           {showPassword &&  <FaEyeSlash onClick={()=>setShowPassword(false)} 
          className="absolute top-1/2 right-5 -translate-y-1/2 text-white cursor-pointer h-20 w-5" />}
         
        </div>
        <button className='w-28 h-12 rounded-full font-semibold text-black bg-white'>Sign Up</button>
      </form>

    </div>
  );
};

export default SignUp;
