import React, { useState } from "react";
import bg from "../assets/authBg.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useContext } from "react";
import { userDataContext } from "../context/userContext.jsx";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const {serverUrl, userData, setuserData} = useContext(userDataContext)

  const handleSignUp = async (e)=>{
    e.preventDefault()
    setErr("")
    setLoading(true)
     try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`,{
        name, email, password
      }, {withCredentials:true})
       setuserData(result.data)
       setLoading(false)
       navigate("/customize")
      
     } catch (error) {
      console.log(error);
      setuserData(null)
      setLoading(false)
      setErr(error.response.data.message)
      
     }
  }
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="px-10 w-[90%] h-[650px] max-w-[500px] bg-[#00000062] backdrop-blur-md
       shadow-lg shadow-black flex flex-col items-center justify-center gap-5 rounded-2xl"
       onSubmit={handleSignUp}
      >
        <h1 className="text-white font-medium text-2xl mb-4">
          Register to <span className="text-teal-500">Virtual Assistant</span>
        </h1>

        <input
          type="text"
          required
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Enter your Name"
          className="w-full px-4 py-2 h-12 outline-none border-2 border-white 
          bg-transparent text-white placeholder-gray-300 rounded-full"
        />

        <input
          type="email"
          required
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="w-full px-4 py-2 h-12 outline-none border-2 border-white 
          bg-transparent text-white placeholder-gray-300 rounded-full"
        />

        <div className="relative w-full h-12">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="w-full h-full outline-none border-2 border-white 
            bg-transparent px-4 py-2 text-white placeholder-gray-300 rounded-full"
          />
          {!showPassword && (
            <FaEye
              onClick={() => setShowPassword(true)}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-white cursor-pointer h-20 w-5"
            />
          )}
          {showPassword && (
            <FaEyeSlash
              onClick={() => setShowPassword(false)}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-white cursor-pointer h-20 w-5"
            />
          )}
        </div>
        {err.length> 0 && <p className="text-red-600"> *{err}</p>}
        <button disabled={loading} className="w-28 h-12 mt-4 rounded-full font-semibold text-black bg-white cursor-pointer hover:bg-teal-200">
        {
          loading
          ?
          "Loading..."
          :
          "Sign Up"
        }
        </button>
        <p className="text-white">
          Already have an account? Click to <span onClick={()=>navigate('/signin')} className="text-teal-500 hover:underline cursor-pointer">Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
