import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
import { CaretRight } from "@phosphor-icons/react";

export default function PrimaryOptions() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  const triggerMouserOver = (value) => {
    MenuDispach(
      change({
        primaryOptions: value,
        isAboutCs: true,
        RecomendedToolsOptions:0
      })
    );
  };

  const triggerMouserLeave = (value) => {
      MenuDispach(
        change({
          primaryOptions :value,
          RecomendedToolsOptions:0
        })
      );

  };
  return (
    <>
      <div
        onMouseEnter={() => triggerMouserOver(1)}
        onMouseLeave={() => triggerMouserLeave(1)}
        className={`${
          selectedMenu.primaryOptions ==1 ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Login</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(2)}
        onMouseLeave={() => triggerMouserLeave(2)}
        className={`${
          selectedMenu.primaryOptions==2 ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Association</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(3)}
        onMouseLeave={() => triggerMouserLeave(3)}
        className={`${
          selectedMenu.primaryOptions ==3 ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Contact us</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(4)}
        onMouseLeave={() => triggerMouserLeave(4)}
        className={`${
          selectedMenu.primaryOptions ==4 ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>About</div>
        <CaretRight size={28} />
      </div>
      <div
        onMouseEnter={() => triggerMouserOver(5)}
        onMouseLeave={() => triggerMouserLeave(5)}
        className={`${
          selectedMenu.primaryOptions ==5 ? selectedMenu.isHover : ""
        } h-[20%] md:h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
      >
        <div>Recomended Tools</div>
        <CaretRight size={28} />
      </div>
    </>
  );
}
