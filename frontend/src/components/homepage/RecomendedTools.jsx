import { useDispatch, useSelector } from "react-redux";
import { CaretRight} from "@phosphor-icons/react";

import { change } from "../../redux/menu/MenuOptSlice";
export default function RecomendedTools() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();

  const triggerMouserOver = (value) => {
    MenuDispach(
      change({
        isAboutCs:false,
        RecomendedToolsOptions: value
      })
    );
  };
  // const triggerMouserLeave = () => {
  //   MenuDispach(
  //     change({
  //       isAboutCs:false,
  //       RecomendedToolsOptions: 0
  //     })
  //   );
  // };

  return (
    <>
      <button
        onMouseEnter={() => {
          triggerMouserOver(1)}}
        className={`${
          selectedMenu.RecomendedToolsOptions==1 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Linux
        <CaretRight size={28} />
      </button>
      <button
        onMouseEnter={() => {

          triggerMouserOver(2)}}
        className={`${
          selectedMenu.RecomendedToolsOptions ==2 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Spring Boot
        <CaretRight size={28} />
      </button>
      <button
        onMouseEnter={() => {

          triggerMouserOver(3)}}
        className={`${
          selectedMenu.RecomendedToolsOptions==3 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        React
        <CaretRight size={28} />
      </button>
      <button
        onMouseEnter={() => {

          triggerMouserOver(4)}}
        className={`${
          selectedMenu.RecomendedToolsOptions==4 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        Angular
        <CaretRight size={28} />
      </button>
      <button
        onMouseEnter={() => {

          triggerMouserOver(5)}}

        className={`${
          selectedMenu.RecomendedToolsOptions==5 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        VsCode
        <CaretRight size={28} />
      </button>
      <button
        onMouseEnter={() => {

          triggerMouserOver(6)}}
        className={`${
          selectedMenu.RecomendedToolsOptions==6 ? selectedMenu.isHover : ""
        } h-[10%] w-full flex justify-between items-center`}
      >
        TailWind
        <CaretRight size={28} />
      </button>
    </>
  );
}
