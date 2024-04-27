import { useSelector } from "react-redux";

export default function DasbBoardContentLayout() {
  const rednerElement = useSelector((state) => state.DashBoardOpt);
  return (
    <>
        <div className="w-auto max-h-[100dvh]">
            {rednerElement.CurrentContent}
        </div>
    </>
  )
}
