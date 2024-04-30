/* eslint-disable react/prop-types */
import { Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {  useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "teacherId", headerName: "Teacher ID", width: 130 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "batchId", headerName: "Batch ID", width: 130 },
];


export default function Table({ChangeState,fETCHcurrentURl}) {
  const ConvertToDataGrid = (data) => {
    return data.map((item, index) => {
      return {
        id: index + 1,
        firstName: item.firstname,
        lastName: item.lastname,
        teacherId: item.teacherID,
        email: item.email,
        batchId: item.batch.length === 0 ? "empty" : item.batch[0].batch,
      };
    });
  };
  
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
            helperText="Update Facualty Frist Name "
            id="demo-helper-text-aligned"
            label={`${selectedOpton?selectedOpton.firstName:"FirstName"}`}
          />
          <TextField
            helperText="Update Facualty Last Name "
            id="demo-helper-text-aligned-no-helper"
            label={`${selectedOpton?selectedOpton.lastName:"FirstName"}`}
          />
          <TextField
            helperText="Update Facualty Email "
            id="demo-helper-text-aligned-no-helper"
            label={`${selectedOpton?selectedOpton.email:"FirstName"}`}
          />
        </div>
        <div className="w-[20%] gap-5 flex justify-center items-center h-[90%]">
        <Button variant="contained" color="success" style={{marginBottom: "15px"}} endIcon={<EditIcon />}>
            Edit
          </Button>
          <Button variant="contained" color="error" style={{marginBottom: "15px"}} startIcon={<DeleteIcon />}>
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
