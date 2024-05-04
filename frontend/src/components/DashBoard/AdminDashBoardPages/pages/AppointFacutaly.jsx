
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AppointFacutaly() {
  const [isThSelected, setIsThSelected] = useState("");
  const [isBatSelected, setIsBatSelected] = useState("");
  const [teacher , setTeacher] = useState([]);
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

  const handleAssignFaculty = async(e) => {
    e.preventDefault();
    if (!isBatSelected || !isThSelected) {
      
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error"
      });
      return; 
    }
    console.log(isBatSelected , isThSelected)
    await axios.post("http://localhost:3000/api/teacher/setFaculty" , {teacherID: isThSelected , batch: isBatSelected})
   .then((res) => {
    console.log(res)
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Teacher Assigned as Faculty Advisor",
    });
   })
   .catch((err) => {
    console.log(err)
    Swal.fire({
      icon: "error",
      title: "Failed",
      text: "Something Went Wrong",
    });
   })

}
  
  return (
   
       <div className=" h-[100%] w-[100%] ">
       <div className="w-[100%] flex text-2xl font-semibold justify-center items-center">
        Appoint Faculty
    </div>
       <div className="w-[100%] flex gap-7 h-[100%] justify-start items-center">
 
 <div className="w-[100%] h-[90%] flex justify-between  items-center gap-8">
 <select
        className="block w-full max-w-md px-14 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        onChange={(e) => {setIsThSelected(e.target.value)}}
      >
        <option value="">Select Teachers</option>
        {teacher.map((option) => (
          <option key={option._id} value={option.teacherID}>
            {option.firstname + " " + option.lastname}
          </option>
        ))}
      </select>
      <select
        className="block w-full px-14 max-w-md py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
       
        onChange={(e) => {setIsBatSelected(e.target.value)}}
      >
        <option value="">Select Batch</option>
        {batch.map((option , index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <button
        onClick={handleAssignFaculty}
        className="py-5 px-16 rounded-xl bg-orange-400 hover:bg-orange-600">Appoint Faculty</button>
    </div>
 </div>
    </div>
    
       </div>
   
  )
}
