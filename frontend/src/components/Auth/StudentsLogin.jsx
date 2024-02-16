import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentLoginImg from "./StudentLoginImg";
import {
  Eye,
  EyeSlash,
  GoogleLogo,
  Minus,
} from "@phosphor-icons/react/dist/ssr";
import axios from 'axios'

export default function StudentsLogin() {
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);
  const [studentID , setStudentID] = useState("");
  const [password , setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signin", {studentID , password})
      .then((res) =>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
    
  };

  

  return (
    <section className="w-screen h-screen lg:bg-white xl:bg-[#1F2544]/75 flex justify-center items-center">
      <div className="w-full h-full lg:w-5/12 lg:h-5/6 2xl:w-9/12 2xl:h-5/6 bg-white flex justify-center items-center border-2 border-transparent rounded-lg gap-5">
        <form
          onSubmit={handleLogin}
          className="w-full h-full 2xl:ms-20 login-form lg:w-full lg:h-full 2xl:w-1/3 2xl:h-5/6 rounded-lg flex flex-col 2xl:border-2 p-7"
        >
          <span className="text-xl text-[#81689D] font-sans font-bold">
            Login
          </span>
          <span className="text-xs font-sans text-gray-500">
            Not a student? Go to{" "}
            <Link to="/" className="text-[#474F7A] underline">
              Staff Login
            </Link>
          </span>
          <span className="mt-7 text-[#474F7A] font-sans font-medium">
            Student ID
          </span>
          <input
            className="mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-300 rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
            name="studentid"
            id="studentid"
            placeholder="320XXXXXXXX"
            onChange={(e)=>setStudentID(e.target.value)}


          ></input>
          <span className="mt-3 text-[#474F7A] font-sans font-medium">
            Password
          </span>
          <div
            className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
              passInput ? "border-[#474F7A]" : "border-gray-300"
            } hover:border-[#474F7A] font-sans`}
          >
            <input
              type={isPassHidden ? "password" : "text"}
              className="bg-transparent ms-2 h-full w-4/5 outline-0 text-sm"
              onFocus={() => {
                setPassInput(!passInput);
              }}
              onBlur={() => {
                setPassInput(!passInput);
              }}
              placeholder="Enter 6 characters or more"
              name="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {isPassHidden ? (
              <Eye
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-2"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            ) : (
              <EyeSlash
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-2"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            )}
          </div>
          <Link to="/" className="text-[#474F7A] mt-3 text-sm underline">
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="mt-5 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75"
          >
            Login
          </button>
          <span className="mt-5 text-sm text-gray-300 self-center font-sans flex justify-center items-center">
            <Minus size={32} />
            or login with
            <Minus size={32} />
          </span>
          <button
            type="submit"
            className="mt-5 flex pt-3 pb-3 bg-transparent justify-center items-center border-2 border-red-400 rounded-lg font-sans text-red-400 hover:bg-gray-300/20 font-semibold"
          >
            <GoogleLogo size={20} className="me-2" /> Google
          </button>
        </form>
        <div className="hidden w-1/2 h-1/2 2xl:flex justify-center items-center">
          <StudentLoginImg/>
        </div>
      </div>
    </section>
  );
}
