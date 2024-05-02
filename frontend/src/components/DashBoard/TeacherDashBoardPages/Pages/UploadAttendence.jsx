import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UploadAttendance = () => {
  const [batch, setBatch] = useState('');

  const [fetchStudent , setFetchStudent] = useState([])

  const [fetchBatch , setFetchBatch] = useState([]);
  const [student, setStudent] = useState('');
  const [presentCount, setPresentCount] = useState('');
  const [absentCount, setAbsentCount] = useState('');

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
    let batch = e.target.value ; 
            
            
    setFetchStudent([]);

    axios.post("http://localhost:3000/api/student/getStudent" , {batch})
    .then((res) => {
    setFetchStudent(res.data);
    console.log(res)
    
    })
    .catch((err) => {
    console.log(err)
    })
  };

  const handleStudentChange = (e) => {
    setStudent(e.target.value);
  };

  const handlePresentCountChange = (e) => {
    setPresentCount(e.target.value);
  };

  const handleAbsentCountChange = (e) => {
    setAbsentCount(e.target.value);
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    console.log(student , presentCount , absentCount  )
    await axios.post('http://localhost:3000/api/teacher/uploadAttendance' , {studentID: student , present: presentCount , absent: absentCount , batch})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Attendance Uploaded Successfully",
        icon: "success"
      });
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Failed",
        text: "Something went wrong",
        icon: "error"
      });
    })


    setBatch('');
    setStudent('');
    setPresentCount('');
    setAbsentCount('');
  };

  useEffect(() =>{
    axios
    .get("http://localhost:3000/api/student/getBatch")
    .then((res) =>{
      setFetchBatch([...res.data]);
      
      console.log(res.data);
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4">Upload Attendance</h1>
        <div className="mb-4">
          <label htmlFor="batch" className="block mb-2 text-lg font-medium">Batch:</label>
          <select
            id="batch"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={batch}
            onChange={handleBatchChange}
          >
            <option value="">Select Batch</option>
            {fetchBatch.map((item , index) => {
              return(
                <option 
                key={index}
                value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="student" className="block mb-2 text-lg font-medium">Student:</label>
          <select
            id="student"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={student}
            onChange={handleStudentChange}
          >
            <option value="">Select Student</option>
            {fetchStudent.map((item , index) => {
              return(
                <option
                key={index}
                value={item.studentID}>{item.firstname + " " + item.lastname}</option>
              )
            })}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="presentCount" className="block mb-2 text-lg font-medium">Present Count:</label>
          <input
            type="number"
            id="presentCount"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={presentCount}
            onChange={handlePresentCountChange}
            placeholder="Enter Present Count"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="absentCount" className="block mb-2 text-lg font-medium">Absent Count:</label>
          <input
            type="number"
            id="absentCount"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={absentCount}
            onChange={handleAbsentCountChange}
            placeholder="Enter Absent Count"
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default UploadAttendance;
