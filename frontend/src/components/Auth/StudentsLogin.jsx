import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Eye, EyeOff} from 'lucide-react'
import StudentLoginImg from './StudentLoginImg'

export default function StudentsLogin() {

  const [passInput, setPassInput] = useState(false);
  const [isPassHidden, setisPassHidden] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault()
    // do stuff bro
  }

  return (
    <section className='w-screen h-screen bg-[#1F2544]/75 flex justify-center items-center'>
      <div className='w-9/12 h-5/6 bg-white flex justify-center items-center border-2 border-transparent rounded-lg gap-5'>
        <form onSubmit={handleLogin} className='ms-20 login-form w-1/3 h-5/6 rounded-lg flex flex-col border-2 p-7'>
          <span className='text-xl text-[#81689D] font-sans font-bold'>Login</span>
          <span className='text-xs font-sans text-gray-500'>Not a student? Go to <Link to="/" className='text-[#474F7A] underline'>Staff Login</Link></span>
          <span className='mt-7 text-[#474F7A] font-sans font-medium'>Email Address</span>
          <input className='mt-2 w-full h-10 outline-0 bg-transparent border-2 border-gray-300 rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm'
            name='email'
            id='email'
            placeholder='you@example.com'></input>
          <span className='mt-3 text-[#474F7A] font-sans font-medium'>Password</span>
          <div
            className={`flex w-full h-10 mt-2 justify-evenly items-center border-2 rounded-lg ${
              passInput ? "border-[#474F7A]" : "border-gray-300"
            } hover:border-[#474F7A] font-sans`}
          >
            <input
              type={isPassHidden ? "password" : "text"}
              className="bg-transparent ms-2 h-full w-4/5 outline-0 text-sm"
              onFocus={() => {
                setPassInput(!passInput);
              }}
              onBlur={() => {
                setPassInput(!passInput);
              }}
              placeholder="Enter 6 characters or more"
              name="password"
              id="password"
            />
            {isPassHidden ? (
              <Eye
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-2"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            ) : (
              <EyeOff
                className="text-gray-900/50 hover:bg-gray-700/10 w-1/6 h-full p-2"
                onClick={() => {
                  setisPassHidden(!isPassHidden);
                }}
              />
            )}
          </div>
          <Link to="/" className='text-[#474F7A] mt-3 text-sm underline'>Forgot Password?</Link>
          <button type='submit' className='mt-5 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75'>Login</button>
          <span className='mt-5 text-sm text-gray-500 self-center font-sans'>or login with</span>
          <button type='submit' className='mt-5 flex pt-3 pb-3 bg-transparent justify-center items-center rounded-lg font-sans text-black hover:bg-[#474F7A]/75'>Google</button>
        </form>
        <div className='login-img w-3/4 h-full'>
          <StudentLoginImg/>
        </div>
      </div>
    </section>
  )
}
