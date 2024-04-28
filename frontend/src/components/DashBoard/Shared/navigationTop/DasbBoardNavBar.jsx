import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

export default function DasbBoardNavBar() {
  const DashOpt = useSelector((state) => state.DashBoardOpt);
  return (
    <>
      <div className="h-[8dvh] sm:w-[80%] w-[100%] absolute top-0">
        <nav className=" h-[100%] w-[100%] flex justify-between items-center bg-[#111111] sm:bg-transparent">
          <div className="flex ms-5 flex-col items-start justify-center w-[30%] sm:text-black text-white  ">
            <span className="text-sm">
              user /{" "}
              <span className="text-orange-400">{DashOpt.CurrentPath}</span>
            </span>
            <span className="text-[1rem] font-bold">{DashOpt.CurrentPath}</span>
          </div>
          <div className="flex items-center me-1 py-2 ps-1 bg-[#111111] rounded-xl justify-center">
            <input
              type="text"
              className="rounded-md sm:w-52 mx-2  w-24 pt-1 pb-1 "
              placeholder=" &nbsp;Search"
            />

            {true && (
              <button className="mx-2 md:mx-4 text-white text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200">
                <MenuIcon fontSize="inherit" color="inherit" />
              </button>
            )}
            <button className="mx-2 md:mx-4 text-white text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200">
              <NotificationsIcon color="inherit" fontSize="medium" />
            </button>
            <button
              type="button"
              className=" mx-2 md:mx-3 text-white  text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200"
            >
              <SettingsApplicationsSharpIcon
                color="inherit"
                fontSize="inherit"
              />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
