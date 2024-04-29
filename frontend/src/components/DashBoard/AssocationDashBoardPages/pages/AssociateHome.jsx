import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AssociateHome() {
    const ProfileSelector = useSelector((state) => state.DashBoardDatas);
  return (
    <>
      <div className="w-[100%] h-[100dvh] flex justify-center items-center">
        <section id="testimonies" className="py-20 bg-gray-200 me-5">
          <div className="max-w-6xl mx-10 ">
            <div className="transition duration-500 ease-in-out transform  translate-x-0 translate-y-0 opacity-100">
              <div className="mb-5 sm:mb-10 space-y-5 md:mb-16 text-center">
                <div className="inline-block  w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full bg-whitetext-sm font-semibold text-black  text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    <img src={ProfileSelector.StudentProfile[0].content} className="rounded-full" alt="" />
                </div>
                <h1 className=" text-xl font-semibold text-black text-center md:text-4xl">
                   Welcome Back <span className="text-orange-600">{ProfileSelector.StudentProfile[1].content}</span> 
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-2  lg:gap-8">
              <ul className="sm:space-y-8 space-y-2 ">
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200 shadow shadow-white"></div>
                    <Link
                    >
                      <div className="relative p-6 lg space-y-6  leading-none rounded-lg bg-white shadow-sm shadow-black ">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              Kanye West
                            </h3>
                            <p className="text-gray-500 text-md">
                              Rapper &amp; Entrepreneur
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">
                          Find God.
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white shadow-sm shadow-black ">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              Kanye West
                            </h3>
                            <p className="text-gray-500 text-md">
                              Rapper &amp; Entrepreneur
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">
                          Find God.
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="sm:space-y-8 space-y-2">
              <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white shadow-sm shadow-black ">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              Kanye West
                            </h3>
                            <p className="text-gray-500 text-md">
                              Rapper &amp; Entrepreneur
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">
                          Find God.
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>           <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link>
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white shadow-sm shadow-black ">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              Kanye West
                            </h3>
                            <p className="text-gray-500 text-md">
                              Rapper &amp; Entrepreneur
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">
                          Find God.
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
