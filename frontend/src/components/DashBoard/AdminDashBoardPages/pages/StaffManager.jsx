/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import AppointFacutaly from "./AppointFacutaly";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
export default function StaffManager({ChangeState,ComponentId , id , teacherID}) {

  const [formData , setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    id: 0
  });


  const handleAddTeacher = async() => {
   
    await axios.post((`http://localhost:3000/api/teacher/addTeacher`) , {firstname:formData.firstname , lastname:formData.lastname, email:formData.email , teacherID: formData.id})
    .then((res) =>{
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Teacher Added Successfully",
      });
    })
    .catch((error) =>{
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something Went Wrong",
      });
      console.log(error);
    })
  }

  const handleAddAssociate = async() => {

    await axios.post((`http://localhost:3000/api/admin/addAssociate`) , {firstname:formData.firstname , lastname:formData.lastname, email:formData.email , studentID: formData.id})
    .then((res) =>{
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Association Member Added Successfully",
      });
    })
    .catch((error) =>{
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something Went Wrong",
      });
      console.log(error);
    })

  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.lastname || !formData.email || !formData.id) {
      
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error"
      });
      return; 
    }

    if(id === 'admin' && teacherID ==='teacher') handleAddTeacher ();

    if(id === 'admin' && teacherID ==='associate') handleAddAssociate ();

  }

  return (
    <>
      <div className="h-[60%] w-[100%] flex justify-center items-center flex-col gap-12">
      <button 
          onClick={()=>{
            ChangeState(0)
          }}
        className="mb-5">  <ArrowBackIcon/></button>
        <div className="text-xl font-semibold">Add Facualty</div>
        <div className=" flex gap-16">
        <TextField
          helperText="Teacher Frist Name "
          id="demo-helper-text-aligned"
          label={"FirstName"}
          onChange={(e) => {setFormData({...formData , firstname: e.target.value})}}
        />

        <TextField
          helperText="Teacher Frist Name "
          id="demo-helper-text-aligned"
          label={"LastName"}
          onChange={(e) => {setFormData({...formData , lastname: e.target.value})}}
        />
        </div>

        <div className="flex gap-16">
        <TextField
          helperText="Teacher  EmailId "
          id="demo-helper-text-aligned"
          label={"Email"}
          onChange={(e) => {setFormData({...formData , email: e.target.value})}}
        />

        <TextField
          helperText="Teacher Id "
          id="demo-helper-text-aligned"
          label={"ID"}
          onChange={(e) => {setFormData({...formData , id: e.target.value})}}
        />
        </div>
        <button 
        onClick = {handleSubmit}
        className=" px-8 py-3 rounded-md hover:bg-orange-600 bg-orange-400">Add Facualty</button>
      </div>
      <div className="h-[30%] w-[100%] flex justify-center items-center flex-col gap-12">
        {ComponentId === 2 && <AppointFacutaly/>}
    </div>
    </>
  );
}
