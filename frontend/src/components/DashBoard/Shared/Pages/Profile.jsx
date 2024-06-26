/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

export default function Profile({updateState}) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const StudentProfile = [
    {
      id: 1,
      Title: "Photo",
      content: `${currentUser.avatar}`,
    },
    {
      id: 2,
      Title: "Name",
      content: currentUser.firstname + " " + currentUser.lastname
    },
    {
      id: 2,
      Title: "Register Number",
      content: currentUser.studentID,
    },
    {
      id: 3,
      Title: "EmailAddress",
      content: currentUser.email
    },
    {
      id: 4,
      Title: "Department",
      content: "BSC Computer Science",
    },
    {
      id: 5,
      Title: "DOB",
      content: currentUser.dob,
    }
  ]
  return (
    <div className=" w-auto max-h-screen flex h-auto justify-center items-center">
      <div className="font-sans antialiased text-gray-100 leading-normal tracking-wider ">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-56  lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-[#111111]  mx-6 lg:mx-0"
          >
            <div key={""} className="p-4 md:p-12 text-center lg:text-left">
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              ></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {currentUser.firstname + " " + currentUser.lastname}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-orange-500 opacity-25"></div>
              {StudentProfile.map((item,index) => {
                return (
                  <>
                  { !(index === 0 || index === 1) &&
                     <p className="pt-4 text-orange-600 text-base font-bold flex items-center justify-start">
                     {item.Title} :{" "}
                     <span className="text-white">&nbsp; {item.content}</span>
                   </p>
                  } 
                  </>
                );
              })}
              <div className="pt-12 pb-8">
                <button onClick={()=>{updateState(true)}} className="bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-8 rounded-full">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src={currentUser.avatar}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="User profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
