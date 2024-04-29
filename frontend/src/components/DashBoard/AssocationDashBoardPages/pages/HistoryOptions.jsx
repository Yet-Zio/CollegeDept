/* eslint-disable react/prop-types */
export default function HistoryOptions({UpdateArticleState,UpdateEventState}) {
  return (
   <>
    <div className="w-[100%] h-[100dvh]  flex justify-end items-center">
          <div className="h-[100%] w-[100%]  flex flex-col md:flex-row  justify-center items-center md:mt-0 mt-40">
            <button
              onClick={() => {
                UpdateEventState(false);
                UpdateArticleState(true);
              }}
              className=" md:me-4 me-0 px-6 py-2 mb-4 md:mb-0 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
            >
              Article History
            </button>
            <button
              onClick={() => {
                UpdateArticleState(false);
                UpdateEventState(true);
              }}
              className="px-6 md:ms-4 ms-0 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
            >
              Event History
            </button>
          </div>
        </div>
   </>
  )
}
