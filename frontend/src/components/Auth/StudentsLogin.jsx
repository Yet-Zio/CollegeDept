import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentsLogin() {
  
  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);

  return (
    <section className='w-screen h-screen bg-[#1F2544]/75 flex justify-center items-center'>
      <div className='w-9/12 h-5/6 bg-white flex justify-center items-center border-2 border-transparent rounded-lg'>
        <form className='login-form w-1/3 h-5/6 rounded-lg flex flex-col'>
          <span className='text-xl text-[#81689D] font-sans font-bold'>Login</span>
          <span className='text-xs font-sans text-gray-500'>Not a student? Go to <Link to="/" className='text-[#474F7A] underline'>Staff Login</Link></span>
          <span className='mt-3 text-[#474F7A] font-sans font-medium'>Email Address</span>
          <input className='mt-2 w-2/3 h-10 outline-0 bg-transparent border-2 border-gray-300 rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm'
            name='email'
            id='email'
            placeholder='you@example.com'></input>
          <div
            className={`flex w-4/5 h-[3.25rem] mt-5 justify-evenly items-center border rounded-lg ${
              passInput ? "border-emerald-600" : "border-gray-700/10"
            } hover:border-emerald-600 font-sans`}
          >
            <input
              type={isPassHidden ? "password" : "text"}
              className="bg-transparent ms-2 h-full w-4/5 outline-0"
              onFocus={() => {
                setPassInput(!passInput);
              }}
              onBlur={() => {
                setPassInput(!passInput);
              }}
              placeholder="Password"
              name="password"
              id="password"
            />
            {isPassHidden ? (
              <Eye
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-3.5"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            ) : (
              <EyeOff
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-3.5"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            )}
          </div>
        </form>
        <div className='login-img'>

        </div>
      </div>
    </section>
  )
}
