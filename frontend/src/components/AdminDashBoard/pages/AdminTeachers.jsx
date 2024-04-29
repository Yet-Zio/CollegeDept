import { useEffect, useState } from 'react'
import {Trash, Pencil, Plus, Stamp} from '@phosphor-icons/react'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AdminTeachers() {
  const handleAddTeacher = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:3000/api/teacher/addTeacher",{firstname , lastname, email , teacherID})
    .then((res) =>{
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Teacher Added Successfully",
      });
      setResponse(res.data);
    })
    .catch((error) =>{
      Swal.fire({
        icon: "error",
        title: "",
        text: "Teacher Added Successfully",
      });
      console.log(error);
    })
  }

  const [teacher , setTeacher] = useState([]);

  const [firstname , setFirstname] = useState("");
  const [lastname , setLastname] = useState("");
  const [email , setEmail] = useState("");
  const [teacherID , setTeacherID] = useState("");
  const [response ,  setResponse] = useState("");
  const [isThSelected, setIsThSelected] = useState("");
  const [isBatSelected, setIsBatSelected] = useState("");

  const [batch , setBatch] = useState([]);

  useEffect(() => {
    const fetchTeachers= async () => {
      const res = await axios.get("http://localhost:3000/api/teacher/getTeacher");
      setTeacher(res.data);
    };

    fetchTeachers();
  }, []);


  useEffect(() =>{
    axios
    .get("http://localhost:3000/api/student/getBatch")
    .then((res) =>{
      setBatch([...res.data]);
      console.log(batch);
      console.log(res.data);
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

  const handleAssignFaculty = (e) => {
      e.preventDefault();
     axios.post("http://localhost:3000/api/teacher/setFaculty" , {teacherID: isThSelected , batch: isBatSelected})
     .then((res) => {
      console.log(res)
     })
     .catch((err) => {
      console.log(err)
     })

  }
  


  return (
    <div className='flex w-screen min-h-screen bg-[#cdd4fa] ps-7'>
      <div className="flex flex-col w-full">
        <span className='text-2xl useinter underline mt-5 mb-5'>Lecturers</span>
        <div className="overflow-x-auto w-1/2">
          <table className="useinter divide-y-2 divide-gray-700 text-md">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">SL.NO</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">FIRST NAME</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">LAST NAME</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Teacher ID</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              
                {teacher.map((teach , index) =>{
                  return(
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{index+1}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{teach.firstname}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{teach.lastname}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{teach.teacherID}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/> <Pencil size={24} className='text-[#1F2544] cursor-pointer'/></td>
                    </tr>
                  )
                })}
              
            </tbody>
          </table>
        </div>
        <form onSubmit={(e) => handleAddTeacher(e)} className='flex flex-col mt-10 useinter w-full'>
          <span className='text-2xl'>Add Lecturer</span>
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/2 pr-4">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                First Name
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="firstname"
                id="firstname"
                placeholder="John"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Last Name
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/2 pr-4">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Email
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="email"
                id="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Teacher ID
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="teacherid"
                id="teacherid"
                placeholder="TEACHERXXXXXX"
                onChange={(e) => setTeacherID(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <button
              type="submit"
              className="mt-5 w-1/4 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75"
            >
              <span className='hidden md:flex'>Add Lecturer</span><Plus className='md:hidden'/>
            </button>
            <p className='text-xl text-black'>{response}</p>
          </div>
        </form>
        <div className='flex flex-col mt-10 useinter w-full'>
          <span className='text-2xl font-medium mb-5'>Manage Lecturer</span>
          <div className="flex w-full">
            <select value={isThSelected} onChange={(e) => {setIsThSelected(e.target.value)}} name='selectlect' id='selectlect' className='w-1/4 border border-transparent rounded-lg outline-0 focus:border-[#1F2544]'>
              <option value=''>Select a teacher...</option>
              {teacher.map((teach) => {
                  return(
                    <option key={teach._id} value={teach.teacherID}>{teach.firstname +" "+ teach.lastname}</option>
                  )
                })}
            </select>

            {isThSelected !== "" && (
              <select value={isBatSelected} onChange={(e) => {setIsBatSelected(e.target.value)}} name='selectbat' id='selectbat' className='ms-3 w-1/4 border border-transparent rounded-lg outline-0 focus:border-[#1F2544]'>
                <option value='' >Select a batch...</option>
                {batch.map((year) => {
                  return(
                    <option key={year} value={year}>{year}</option>
                  )
                })}
                
              </select>
            )}
          </div>
          {isBatSelected !== "" && (
            <div className="flex flex-col w-1/2 items-center">
                <button
                onClick={handleAssignFaculty}
                className="mt-5 w-1/3 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75"
                >
                  <span 
                  className='hidden md:flex'>Assign as Faculty Advisor</span><Stamp className='md:hidden'/>
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
