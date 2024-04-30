
import { Link } from 'react-router-dom'
import logo from '../../../../assets/collegedepticon.png'
export default function Logo() {
  return (
   <>
            <Link to={"/"} className="mt-10 w-[70%] font-extrabold flex justify-evenly items-center">
        <img className=" h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 ms-4" src={logo} alt="" />
            <span className="sm;text-[2dvh]  lg:text-[2.3dvh] me-4 text-white">DEPT OF CS</span>
        </Link>
   </>
  )
}
