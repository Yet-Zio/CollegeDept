import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";

export default function DasbBoardNavBar() {
  const DashOpt = useSelector((state) => state.DashBoardOpt);
  const updatePrimarySideBar = useDispatch();
  return (
    <>
      <div
        className={`h-[6dvh] ${
          DashOpt.PrimarySideBarEnabled ? "w-[80%]" : "w-[95%]"
        }  absolute top-0`}
      >
        {  window.innerWidth>420 &&
          <div className="flex ms-5 flex-col mt-2 items-start justify-center w-[30%] text-black  ">
          <span className="text-sm">
            user /{" "}
            <span className="text-orange-400">{DashOpt.CurrentPath}</span>
          </span>
          <span className="text-[1rem] font-bold">{DashOpt.CurrentPath}</span>
        </div>}
      </div>
      <div className="fixed top-2 right-2">
        <div className="flex items-center me-1 py-2 ps-1 bg-[#111111]  rounded-xl justify-center">
          {!(DashOpt.PrimarySideBarEnabled && window.innerWidth < 940) && (
            <input
              type="text"
              className="rounded-md sm:w-52 mx-2  w-24 pt-1 pb-1 "
              placeholder=" &nbsp;Search"
            />
          )}

          {
            <button
              onClick={() =>
                updatePrimarySideBar(
                  DashBoardOptchange({
                    PrimarySideBarEnabled: !DashOpt.PrimarySideBarEnabled,
                    onInit: false
                  })
                )
              }
              className="mx-2 md:mx-4 text-white text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200"
            >
              <MenuIcon fontSize="inherit" color="inherit" />
            </button>
          }
          {!(DashOpt.PrimarySideBarEnabled && window.innerWidth < 940) && (
            <>
              <button className="mx-2 md:mx-4 text-white text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200">
                <NotificationsIcon color="inherit" fontSize="medium" />
              </button>
              <button
                type="button"
                className=" mx-2  md:mx-3 text-white  text-2xl sm:text-3xl flex justify-center items-center hover:text-orange-400 transition-colors duration-200"
              >
                <SettingsApplicationsSharpIcon
                  color="inherit"
                  fontSize="inherit"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
