import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { login } from "../../redux/user/userSlice";

import {
  Eye,
  EyeSlash,
  Asterisk
} from "@phosphor-icons/react/dist/ssr";
import { Link , useNavigate } from "react-router-dom";
import AssocaitionNav from "../association/shared/AssocaitionNav";
import Footer from "../Shared/Footer";
import axios from 'axios';

export default function AssocLogin() {
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);
  const [formData , setFormData] = useState({
    studentID : 0 ,
    password: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async(e) => {
    e.preventDefault()
    console.log(formData)
    await axios.post(('http://localhost:3000/api/associate/loginAssociate') , formData)
    .then((res) => {
      console.log(res)
      dispatch(login(res.data))
      navigate('/AssociationDashBoard')
    })
    .catch((err) =>  {
      console.log(err)
    })

  }

  const setTitle = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      document.title = "Association Login - Department of CS"
    }, [])
  }

  setTitle()

  return (
   <>
   <AssocaitionNav/>
     <div className="flex flex-col min-h-screen min-w-screen justify-center items-center bg-[#151515] xl:bg-gradient-to-r xl:from-[#bbb7b7] xl:via-[#000000] xl:to-[#c19447] xl:dark:from-[#272727] xl:dark:via-[#4b4b4b] xl:dark:to-[#6d6761]">
      <form onSubmit={handleLogin} className="flex flex-col w-full h-full md:w-[500px] md:h-[600px] md:border-2 border-gray-500/15 rounded-xl p-7 bg-[#2b2a2a] mb-[10dvh] md:mb-0">
        <Asterisk className="self-center mb-0 md:mt-[4dvh] text-orange-600" size={64} weight="fill"/>
        <span className="useinter text-xl text-white font-sans mt-[3dvh] font-extrabold  mb-[3dvh]">
          Association Login
        </span>
        <span className="useinter text-[#e9e7e7] font-sans font-medium">
          Student ID
        </span>
        <input
          className="useinter mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-500/15 rounded-lg p-2 hover:border-orange-400 text-white focus:border-orange-800 text-sm"
          name="associd"
          id="associd"
          placeholder="320XXXXXXXX"
          onChange={(e) => {setFormData({...formData , studentID: e.target.value})}}
        ></input>
        <span className="useinter mt-3 text-[#e9e7e7] font-sans font-medium">
          Password
        </span>
        <div
          className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
            passInput ? "border-orange-800" : "border-gray-500/15"
          } hover:border-orange-400 font-sans`}
        >
          <input
            type={isPassHidden ? "password" : "text"}
            className="useinter bg-transparent ms-2 h-full text-white w-4/5 outline-0 text-sm"
            onChange={(e) => {setFormData({...formData , password: e.target.value})}}
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
              className="text-white hover:bg-gray-700/10 w-1/6 h-full p-2 cursor-pointer"
              onClick={() => {
                setisPassHidden(!isPassHidden);
              }}
            />
          ) : (
            <EyeSlash
              className="text-white hover:bg-gray-700/10 w-1/6 h-full p-2 cursor-pointer"
              onClick={() => {
                setisPassHidden(!isPassHidden);
              }}
            />
          )}
        </div>
        <span  className="useinter text-[#e9e7e7] mt-[4dvh] text-sm underline">
          <Link className="hover:text-orange-500"> Forgot Password?</Link>
        </span>
        <button
          type="submit"
          className="useinter mt-5 flex pt-3 pb-3 bg-orange-600 justify-center items-center rounded-lg font-sans text-white hover:bg-orange-800"
        >
          Login
        </button>
      </form>
    </div>
    <Footer/>
   </>
  );
}
