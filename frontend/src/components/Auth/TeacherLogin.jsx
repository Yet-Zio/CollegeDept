import React, { useEffect, useState } from "react";
import {
  Eye,
  EyeSlash,
  ChalkboardTeacher
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

export default function TeacherLogin() {
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const setTitle = () => {
    useEffect(() => {
      document.title = "Teacher Login - Department of CS"
    }, [])
  }

  setTitle()

  return (
    <div className="flex flex-col min-h-screen min-w-screen md:justify-center items-center bg-white">
      <form onSubmit={handleLogin} className="flex flex-col w-full h-full md:w-[500px] md:h-[600px] md:border-2 border-gray-500/10 rounded-xl p-7">
        <ChalkboardTeacher className="self-center text-[#E77500]" size={64} weight="fill"/>
        <span className="useinter text-xl text-black font-sans font-bold">
          Teacher Login
        </span>
        <span className="useinter mt-2 text-xs font-sans text-gray-500">
          Not a teacher? Go to{" "}
          <Link to="/studentlogin" className="useinter text-[#E77500] underline">
            Student Login
          </Link>
        </span>
        <span className="useinter mt-7 text-gray-700/75 font-sans font-medium">
          Teacher ID
        </span>
        <input
          className="useinter mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-500/15 rounded-lg p-2 hover:border-[#E77500] focus:border-[#E77500] text-sm"
          name="teacherid"
          id="teacherid"
          placeholder="TEACHERXXXXXX"
        ></input>
        <span className="useinter mt-3 text-gray-700/75 font-sans font-medium">
          Password
        </span>
        <div
          className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
            passInput ? "border-[#E77500]" : "border-gray-500/15"
          } hover:border-[#E77500] font-sans`}
        >
          <input
            type={isPassHidden ? "password" : "text"}
            className="useinter bg-transparent ms-2 h-full w-4/5 outline-0 text-sm"
            onFocus={() => {
              setPassInput(!passInput);
            }}
            onBlur={() => {
              setPassInput(!passInput);
            }}
            placeholder="Enter 6 characters or more"
            name="password"
            id="password"
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
        <Link to="/" className="useinter text-[#E77500] mt-3 text-sm underline">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="useinter mt-5 flex pt-3 pb-3 bg-[#E77500] justify-center items-center rounded-lg font-sans text-white hover:bg-[#E77500]/75"
        >
          Login
        </button>
      </form>
    </div>
  );
}
