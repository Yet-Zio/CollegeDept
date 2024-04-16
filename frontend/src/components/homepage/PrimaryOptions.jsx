import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
import { CaretRight } from "@phosphor-icons/react";

export default function PrimaryOptions() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  const triggerMouserOver = (value) => {
    switch (value) {
      case 1:
        MenuDispach(
          change({
            primaryOptions: value,
            isAboutCs: true,
            isLogin: true,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
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
            primaryOptions: value,
            isAboutCs: true,
            isLogin: false,
            isAssociation: true,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
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
            primaryOptions: value,
            isAboutCs: true,
            isLogin: false,
            isAssociation: false,
            isContactUs: true,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            primaryOptions: value,
            isAboutCs: true,
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: true,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            primaryOptions: value,
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: true,
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
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 2:
        MenuDispach(
          change({
            isLogin: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 3:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
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
          selectedMenu.isLogin ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Login</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(2)}
        onMouseLeave={() => triggerMouserLeave(2)}
        className={`${
          selectedMenu.isAssociation ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Association</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(3)}
        onMouseLeave={() => triggerMouserLeave(3)}
        className={`${
          selectedMenu.isContactUs ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Contact us</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(4)}
        onMouseLeave={() => triggerMouserLeave(4)}
        className={`${
          selectedMenu.isAbout ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>About</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(5)}
        onMouseLeave={() => triggerMouserLeave(5)}
        className={`${
          selectedMenu.isRecomendedTools ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Recomended Tools</div>
        <CaretRight size={28} />
      </div>
    </>
  );
}
