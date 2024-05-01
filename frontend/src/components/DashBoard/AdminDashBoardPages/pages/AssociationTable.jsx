/* eslint-disable react/prop-types */
import { Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {  useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from "sweetalert2";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "StudentId", headerName: "Student ID", width: 130 },
  { field: "email", headerName: "Email", width: 250 },
];


export default function AssocationTable({ChangeState,fETCHcurrentURl}) {
  const ConvertToDataGrid = (data) => {
    return data.map((item, index) => {
      return {
        id: index + 1,
        firstName: item.firstname,
        lastName: item.lastname,
        studentID: item.studentID,
        email: item.email,
      };
    });
  };
  
  const [formData , setFormData] = useState({
    firstname: "" , 
    lastname: "",
    email: ""
  })


  const handleUpdateAssociate = async(studentID) => {
    console.log(studentID)
    if (!formData.firstname && !formData.lastname && !formData.email) {
  
      Swal.fire({
        title: "Error",
        text: "Nothing To Update",
        icon: "error"
      });
      return; 
    }

    await axios.post('http://localhost:3000/api/associate/updateAssociate' , {firstname: formData.firstname , lastname: formData.lastname , email: formData.email , studentID: studentID})
    .then((res) => {
      console.log(res)
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Associate Updated Successfully",
      });
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong",
      });
    })

  };

  const handleDeleteAssociate = async(studentID) => {

    axios.delete(`http://localhost:3000/api/associate/deleteAssociate/${studentID}`)
    .then((res) => {
      console.log(res)
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Associate Deleted  Successfully",
      });
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong",
      });
    })
  };

  const handleEdit =  async(selectedOpton) => {
      handleUpdateAssociate(selectedOpton.studentID);

  }

  const handleDelete = async(selectedOpton) => {
      handleDeleteAssociate(selectedOpton.studentID);
  }

  const [response, setResponse] = useState([]);
  const [selectedOpton, setSelectedOption] = useState();
  
  useEffect(() => {

  
    const fetchTeachers = async () => {
      try {
        console.log(fETCHcurrentURl)
        const res = await axios.get(fETCHcurrentURl);
        console.log("Data from API:", res.data);
        const convertedData = ConvertToDataGrid(res.data);
        console.log("Converted data:", convertedData);
        setResponse(convertedData);
        console.log(response);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
  
    fetchTeachers();
  }, [fETCHcurrentURl]);
  
  return (
    <>
      <div className=" w-[100%] h-[10%]  flex justify-between items-center ">
        <div className="w-[80%] h-[90%] flex justify-start gap-7 items-center">
        <button 
          onClick={()=>{
            ChangeState(0)
          }}
        className="mb-5">  <ArrowBackIcon/></button>
          <TextField
            onChange={(e) => {setFormData({...formData , firstname: e.target.value})}}
            helperText="Update Facualty Frist Name "
            id="demo-helper-text-aligned"
            label={`${selectedOpton?selectedOpton.firstName:"FirstName"}`}
          />
          <TextField
            onChange={(e) => {setFormData({...formData , lastname: e.target.value})}}
            helperText="Update Facualty Last Name "
            id="demo-helper-text-aligned-no-helper"
            label={`${selectedOpton?selectedOpton.lastName:"FirstName"}`}
          />
          <TextField
            onChange={(e) => {setFormData({...formData , email: e.target.value})}}
            helperText="Update Facualty Email "
            id="demo-helper-text-aligned-no-helper"
            label={`${selectedOpton?selectedOpton.email:"FirstName"}`}
          />
        </div>
        <div className="w-[20%] gap-5 flex justify-center items-center h-[90%]">
        <Button onClick={()=>{handleEdit(selectedOpton)}} variant="contained" color="success" style={{marginBottom: "15px"}} endIcon={<EditIcon />}>
            Edit
          </Button>
          <Button onClick={()=>handleDelete(selectedOpton)} variant="contained" color="error" style={{marginBottom: "15px"}} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </div>
      </div>
      <div style={{ height: "90%", width: "100%" }}>
        <DataGrid
          rows={response}
          columns={columns}
          pageSize={15}
          onRowSelectionModelChange={(data) => {
              setSelectedOption(response[data[0]-1])
              console.log(selectedOpton)        
          }}
        />
      </div>
    </>
  );
}
