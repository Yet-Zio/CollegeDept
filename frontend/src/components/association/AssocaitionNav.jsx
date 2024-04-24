import { useState } from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/collegedepticon.png"
export default function AssocaitionNav() {
    const [isColpase, setColapse] = useState(false);
    const buttonTrigger=()=>{
        setColapse(!isColpase);
    }
  return (
    <>
        <nav  className="bg-[#151515]">
    <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
               <Link to={"/home-assoc"} className="md:text-xl xl:text-2xl text-sm font-semibold items-center flex text-[#DC8733]">
                <img src={logo} className="xl:h-[30px] xl:w-[30px] md:h-[2.6dvh] md:w-[2.6dvh] w-[2dvh] h-[2dvh]" alt="" />
                Association
               </Link>
                <div className="flex lg:hidden" onClick={()=> buttonTrigger()} >
                    <button  type="button" className="text-white transition-colors hover:text-[#c48749]" aria-label="toggle menu">
                       { !isColpase && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path  d="M4 8h16M4 16h16" />
                        </svg>}
                
                        {isColpase && <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>
            </div>
            <div  className={`${isColpase?"translate-x-0 opacity-100":"opacity-0 -translate-x-full"} absolute inset-x-0 z-20 flex-1 w-full px-6  py-4 transition-all duration-300 ease-in-out bg-[#151515] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end justify-between`}>
                <div className="flex flex-col font-semibold text-white xl:text-lg md:text-lg text-sm lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                    <Link to={"/home-assoc"} className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]">Home</Link>
                    <Link to={"/"} className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]">Dept Home</Link>
                    <Link to={"/"} className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]">Event</Link>
                    <Link to={"/"} className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]">Articles</Link>
                    <Link to={"/assoclogin"} className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]">Login</Link>
    
                    <div className="relative mt-4 lg:mt-0 lg:mx-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-6 font-extrabold h-6 text-[#DC8733]" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor"></path>
                            </svg>
                        </span>
    
                        <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-[#292929] border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent focus:outline-none focus:border-gray-600" placeholder="Search" />
                    </div>
                </div>
    
                
            </div>
        </div>
    </div>
</nav>
    </>
  )
}
