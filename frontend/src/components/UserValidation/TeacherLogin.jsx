import { useEffect, useState } from "react";
import {
  Eye,
  EyeSlash,
  ChalkboardTeacher
} from "@phosphor-icons/react/dist/ssr";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { login } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function TeacherLogin() {
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    teacherID: "" , 
    password: ""
  })

  const handleLogin = async(e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/api/teacher/teacherSignin", formData)
    .then((res) => {
      console.log(res)
      dispatch(login(res.data))
      navigate('/TeacherDashBoard')
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Failed",
        text: "Login Failed",
        icon: "error"
      });
    })
  }

  const setTitle = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      document.title = "Teacher Login - Department of CS"
    }, [])
  }

  setTitle()

  return (
    <>
    <Nav/>
      <div className="flex flex-col min-h-screen min-w-screen bg-[#151515] xl:bg-gradient-to-r xl:from-[#bbb7b7] xl:via-[#000000] xl:to-[#c19447] xl:dark:from-[#272727] xl:dark:via-[#4b4b4b] xl:dark:to-[#6d6761] justify-center items-center useinter">
      <form onSubmit={handleLogin} className="flex flex-col w-full h-full md:w-[500px] md:h-[600px] md:border-2   dark:bg-[#252525]  border-gray-500/10 rounded-xl p-7 mb-[14dvh] md:mb-0">
        <ChalkboardTeacher className="self-center text-orange-600" size={64} weight="fill"/>
        <span className="useinter text-xl text-white font-sans font-bold mt-3">
          Teacher Login
        </span>
        <span className="useinter mt-2 text-xs font-sans text-gray-400">
          Not a teacher? Go to{" "}
          <Link to="/studentlogin" className="useinter text-orange-600 hover:text-orange-800 underline">
            Student Login
          </Link>
        </span>
        <span className="useinter mt-7 text-white font-sans font-medium">
          Teacher ID
        </span>
        <input
          onChange={(e) => {setFormData({...formData , teacherID: e.target.value})}}
          className="useinter mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-500/15 rounded-lg p-2 hover:border-orange-400 focus:border-orange-600 text-sm text-white"
          name="teacherid"
          id="teacherid"
          placeholder="12345XXXX"
        ></input>
        <span className="useinter mt-3 text-white font-sans font-medium">
          Password
        </span>
        <div
          className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
            passInput ? "border-orange-600" : "border-gray-500/15"
          } hover:border-orange-400 font-sans`}
        >
          <input
            type={isPassHidden ? "password" : "text"}
            className="useinter bg-transparent ms-2 h-full w-4/5 outline-0 text-sm text-white"
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
              className="text-gray-300/50 hover:bg-gray-300/10 w-1/6 h-full p-2"
              onClick={() => {
                setisPassHidden(!isPassHidden);
              }}
            />
          ) : (
            <EyeSlash
              className="text-gray-300/50 hover:bg-gray-300/10 w-1/6 h-full p-2"
              onClick={() => {
                setisPassHidden(!isPassHidden);
              }}
            />
          )}
        </div>
        <span to="/" className="useinter text-white mt-8 text-sm underline">
         <Link className="hover:text-orange-600"> Forgot Password?</Link>
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
