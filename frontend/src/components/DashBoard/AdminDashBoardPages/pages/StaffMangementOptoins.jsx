/* eslint-disable react/prop-types */


export default function StaffMangementOptoins({changeItemId}) {
  return (
    <div className="w-[100%] h-[100dvh]  flex justify-end items-center">
    <div className="h-[100%] w-[100%]  flex   justify-center items-center md:mt-0 mt-40 flex-col">

    <div className="mb-12">
    <button
        onClick={() => {
            changeItemId(1)
        }}
        className=" md:me-4 me-0 px-6 py-2 mb-4 md:mb-0 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
      >
       Create Facutly
      </button>
      <button
        onClick={() => {
            changeItemId(2)
        }}
        className="px-6 md:ms-4 ms-0 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
      >
        Manage Facutly
      </button>
    </div>
    <div className=" mb-28s">
    <button
        onClick={() => {
            changeItemId(3)
        }}
        className=" md:me-4 me-0 px-6 py-2 mb-4 md:mb-0 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
      >
      Create Association Member
      </button>
      <button
        onClick={() => {
            changeItemId(4)
        }}
        className="px-6 md:ms-4 ms-0 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
      >
       Manage Association Member
      </button>
    </div>

    </div>
  </div>
  )
}
