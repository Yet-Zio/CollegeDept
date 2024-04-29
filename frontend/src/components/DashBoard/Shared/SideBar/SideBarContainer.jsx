/* eslint-disable react/prop-types */
import { Power } from "@phosphor-icons/react";
import Buttons from "./Buttons";
import Logo from "./Logo";
import { useSelector  , useDispatch} from "react-redux";
import { logout } from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function SideBarContainer() {
  let Data = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  Data = useSelector((state) => state.DashBoardDatas.SideBarButtons);
  const DashOpt = useSelector((state) => state.DashBoardOpt);

  const handleLogOut = async() => {
    await axios.get('http://localhost:3000/api/auth/signout')
    .then((res) => {
      dispatch(logout());
      navigate('/');
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Failed",
        text: "Logout Failed",
        icon: "error"
      });
    })
  
  

  }
  return (
    <>
      <div className="w-[100%] h-[96%] flex justify-between flex-col items-center rounded-lg">
        <Logo />
        <div
          className={`w-[100%] flex flex-col justify-evenly items-center ${
            Data.length <= 6 ? "h-[40%]" : "h-[50%]"
          }`}
        >
          {Data.map((item) => {
            return (
              <Buttons
                key={item.id}
                id={item.id}
                ButtonName={item.ButtonName}
                Logo={item.Logo}
                navigateTo={item.NavigateTo}
                Content={item.Content}
                ActiveColor={
                  DashOpt.SeletedOption === item.id ? "bg-orange-600" : ""
                }
              />
            );
          })}
        </div>
        <Buttons
          className=" mb-16"
          ButtonName={"Log out"}
          Logo={<Power className="font-extrabold" size={25} weight="bold" />}
          logout = {handleLogOut}
          
        />
      </div>
    </>
  );
}
