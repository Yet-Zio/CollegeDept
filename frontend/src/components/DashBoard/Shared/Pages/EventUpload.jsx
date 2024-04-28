import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
export default function EventUpload() {
  return (
    <>

<section className="bg-grey-200">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full  ">
        <div className="mb-6 w-full flex  justify-end items-center">
                <button onClick={(e)=>{e.preventDefault()}} className=" px-6 py-3 text-sm font-medium active:shadow-none active:translate-x-0.5 active:translate-y-0.5 tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50 shadow shadow-black">
                    Upload <DriveFolderUploadIcon/>
                </button>
            </div>
            <div className="relative flex items-center mt-8">
                <input type="text" className="block w-full py-4 text-black placeholder:text-black border rounded-lg px-11 bg-gray-200 dark dark:border-orange-600 focus:border- orange-400 dark:focus:border-orange-300 focus:ring- orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Event Title should not exceed 3 words"/>
            </div>

            <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center  border-2 border-dashed rounded-lg cursor-pointer dark:border-orange-600 bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  dark: text-[black]-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3  text-[black]-400">Image Upload</h2>

                <input id="dropzone-file" type="file" className="hidden" />
            </label>

            <div className="relative flex items-center mt-6">
              

<textarea id="message" rows="4" className="block p-2.5  w-full text-sm text-black rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500  dark:border-orange-600 bg-gray-200 dark:placeholder-black dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Descirption About the Event ......."></textarea>

            </div>
        </form>
    </div>
</section>

    </>
  )
}
