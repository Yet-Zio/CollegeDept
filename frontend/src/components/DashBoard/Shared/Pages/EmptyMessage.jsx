/* eslint-disable react/prop-types */

export default function EmptyMessage({emptyMessage}) {
  return (
   <>
    <div className="w-[89%] h-[89dvh] bg-gray-200 flex justify-center items-center">
        <span className="text-lg font-bold text-[#757575]">{emptyMessage}</span>
    </div>
   </>
  )
}
