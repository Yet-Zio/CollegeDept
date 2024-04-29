import { useSelector } from "react-redux";

export default function DasbBoardContentLayout() {
  const rednerElement = useSelector((state) => state.DashBoardOpt);
  const primarySideBar = useSelector((state) => state.DashBoardOpt.PrimarySideBarEnabled);
  return (
    <>
        <div className={`w-auto ${primarySideBar? "":"ms-4"} max-h-[100dvh] overflow-hidden`}>
            {rednerElement.CurrentContent}
        </div>
    </>
  )
}
