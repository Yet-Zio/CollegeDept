/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
// import AppointFacutaly from "./AppointFacutaly";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
export default function AddStudents() {

  const [formData , setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    studentID: 0,
    batch: ""
  });

  const handleSubmit = async(e) => {

    e.preventDefault();
    let studBatch = `batch${formData.batch}`
    await axios.post('http://localhost:3000/api/student/addStudent',{firstname:formData.firstname , lastname: formData.lastname , studentID: formData.studentID , batch: studBatch , email: formData.email})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Student added successfully",
        icon: "success"
      });
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Failed",
        text: "something went wrong",
        icon: "error"
      });
    })

  }


 

  return (
    <>
      <div className="h-[60%] w-[100%] flex justify-center items-center flex-col mt-48 gap-12">

        <div className="text-xl font-semibold">Add Student</div>
        <div className=" flex gap-16">
        <TextField
          helperText="Student Frist Name "
          id="demo-helper-text-aligned"
          label={"FirstName"}
          onChange={(e) => {setFormData({...formData , firstname: e.target.value})}}
        />

        <TextField
          helperText="Student Frist Name "
          id="demo-helper-text-aligned"
          label={"LastName"}
          onChange={(e) => {setFormData({...formData , lastname: e.target.value})}}
        />
        </div>

        <div className="flex gap-16">
        <TextField
          helperText="Student  EmailId "
          id="demo-helper-text-aligned"
          label={"Email"}
          onChange={(e) => {setFormData({...formData , email: e.target.value})}}
        />

        <TextField
          helperText="Student  Id "
          id="demo-helper-text-aligned"
          label={"ID"}
          onChange={(e) => {setFormData({...formData , studentID: e.target.value})}}
        />
        </div>
        <div className="flex gap-16">
        <TextField
          helperText="Student Batch "
          id="demo-helper-text-aligned"
          label={"Batch"}
          onChange={(e) => {setFormData({...formData , batch: e.target.value})}}
        />
</div>
        <button 
        onClick = {handleSubmit}
        className=" px-8 py-3 rounded-md hover:bg-orange-600 bg-orange-400">Add Student</button>
      </div>
      <div className="h-[30%] w-[100%] flex justify-center items-center flex-col gap-12">
    </div>
    </>
  );
}
