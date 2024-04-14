import { useDispatch, useSelector } from "react-redux";
import { CaretRight} from "@phosphor-icons/react";

import { change } from "../../redux/menu/MenuOptSlice";
export default function RecomendedTools() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();

  const triggerMouserOver = (value) => {
    console.log(selectedMenu);
    switch (value) {
      case 1:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: true,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 2:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: false,
            isSpring: true,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 3:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: false,
            isSpring: false,
            isReact: true,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: true,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: true,
            isTailwind: false,
          })
        );
        break;
      case 6:
        MenuDispach(
          change({
            isAboutCs:false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: true,
          })
        );
        break;
      default:
        break;
    }
  };
  const triggerMouserLeave = (value) => {
    switch (value) {
      case 1:
        MenuDispach(
          change({
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 2:
        MenuDispach(
          change({
            isLinux: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 3:
        MenuDispach(
          change({
            isLinux: false,
            isSpring: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            isLinux: false,
            isSpring: false,
            isReact: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isTailwind: false,
          })
        );
        break;
      case 6:
        MenuDispach(
          change({
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        onMouseEnter={() => triggerMouserOver(1)}
        onMouseLeave={() => triggerMouserLeave(1)}
        className={`${
          selectedMenu.isLinux ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Linux
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(2)}
        onMouseLeave={() => triggerMouserLeave(2)}
        className={`${
          selectedMenu.isSpring ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Spring Boot
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(3)}
        onMouseLeave={() => triggerMouserLeave(3)}
        className={`${
          selectedMenu.isReact ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        React
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(4)}
        onMouseLeave={() => triggerMouserLeave(4)}
        className={`${
          selectedMenu.isAngular ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Angular
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(5)}
        onMouseLeave={() => triggerMouserLeave(5)}
        className={`${
          selectedMenu.isVscode ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        VsCode
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(6)}
        onMouseLeave={() => triggerMouserLeave(6)}
        className={`${
          selectedMenu.isTailwind ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        TailWind
        <CaretRight size={28} />
      </div>
    </>
  );
}
