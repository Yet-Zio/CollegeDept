import logo from '../../assets/collegedepticon.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (<>
        
        <footer className=" bg-[#040404]">
    <div className="container-lg p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <Link to={"/"} className='flex'>
                    <span>
                        <img className="w-auto h-7" src={logo} alt="" />
                    </span>
                    <span className='text-[#FFFFFF] useHeading ps-2'>
                        DEPT OF CS
                    </span>
                    </Link>

                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Failure Cannot Decide Your Future rather Its just a step towards Your Dream</p>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Quick Links</h3>
                        <Link to={"/studentlogin"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">Student Login</Link>
                        <Link to={"/teacherlogin"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">Staff Login</Link>
                        <Link to={"/assoclogin"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">Assocation Login</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Features</h3>
                        <Link to={"/notcreateyet"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">News</Link>
                        <Link to={"/event"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">events</Link>
                        <Link to={"/article"} className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">Articles</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About Dept of Cs</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">About Staff</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">About Department</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">Gallery</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <Link to={"/contact-us"} className='block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline'>Contact Us</Link>
                        <span className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">(0471)224 8416</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:hover:text-[#E77500] hover:underline">departmentofcs@emc.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-grey-200 border-none dark:bg-[#e774008b]" />

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© CopyRight ... All rights reserved</p>
        </div>
    </div>
</footer>
    </>)
}