
import { Link } from 'react-router-dom'
import logo from '../../../../assets/collegedepticon.png'
export default function Logo() {
  return (
   <>
            <Link className="mt-10 w-[70%] font-extrabold flex justify-evenly items-center">
        <img className="h-8 w-8" src={logo} alt="" />
            <span className="text-2xl">DEPT OF CS</span>
        </Link>
   </>
  )
}
