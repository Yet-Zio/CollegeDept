import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
export default function RecomendedTools() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  return (
    <>
      <div
        className={`${
          selectedMenu.isLinux ? selectedMenu.isHover : ""
        }h-[10%] w-full flex justify-start items-center`}
      >
        Linux
      </div>
      <div
        className={`${
          selectedMenu.isSpring ? selectedMenu.isHover : ""
        }h-[10%] w-full flex justify-start items-center`}
      >
        Spring Boot
      </div>
      <div
        className={`${
          selectedMenu.isReact ? selectedMenu.isHover : ""
        }h-[10%] w-full flex justify-start items-center`}
      >
        React
      </div>
      <div
        className={`${
          selectedMenu.isAngular ? selectedMenu.isHover : ""
        }h-[10%] w-full flex justify-start items-center`}
      >
        Angular
      </div>
    </>
  );
}
