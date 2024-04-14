import { useEffect, useState } from "react";
import {
  Eye,
  EyeSlash,
  Asterisk
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const setTitle = () => {
    useEffect(() => {
      document.title = "Admin Login - Department of CS"
    }, [])
  }

  setTitle()

  return (
    <div className="flex flex-col min-h-screen min-w-screen md:justify-center items-center bg-[#E1F4F4]">
      <form onSubmit={handleLogin} className="flex flex-col w-full h-full md:w-[500px] md:h-[600px] md:border-2 border-gray-500/15 rounded-xl p-7">
        <Asterisk className="self-center text-[#2C7777]" size={64} weight="fill"/>
        <span className="useinter text-xl text-[#163B3B] font-sans font-bold">
          Admin
        </span>
        <span className="useinter mt-7 text-[#2C7777] font-sans font-medium">
          Email ID
        </span>
        <input
          className="useinter mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-500/15 rounded-lg p-2 hover:border-[#6AC8C8] focus:border-[#6AC8C8] text-sm"
          name="adminemail"
          id="adminemail"
          placeholder="admin@cs.emmanuelcollege.ac.in"
        ></input>
        <span className="useinter mt-3 text-[#2C7777] font-sans font-medium">
          Password
        </span>
        <div
          className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
            passInput ? "border-[#6AC8C8]" : "border-gray-500/15"
          } hover:border-[#6AC8C8] font-sans`}
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
        <Link to="/" className="useinter text-[#2C7777] mt-3 text-sm underline">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="useinter mt-5 flex pt-3 pb-3 bg-[#2C7777] justify-center items-center rounded-lg font-sans text-white hover:bg-[#2C7777]/75"
        >
          Login
        </button>
      </form>
    </div>
  );
}
