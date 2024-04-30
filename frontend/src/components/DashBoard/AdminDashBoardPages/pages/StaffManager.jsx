/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import AppointFacutaly from "./AppointFacutaly";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// eslint-disable-next-line react/prop-types
export default function StaffManager({ChangeState,ComponentId}) {
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
        />

        <TextField
          helperText="Teacher Frist Name "
          id="demo-helper-text-aligned"
          label={"LastName"}
        />
        </div>

        <div className="flex gap-16">
        <TextField
          helperText="Teacher  EmailId "
          id="demo-helper-text-aligned"
          label={"Email"}
        />

        <TextField
          helperText="Teacher Id "
          id="demo-helper-text-aligned"
          label={"ID"}
        />
        </div>
        <button className=" px-8 py-3 rounded-md hover:bg-orange-600 bg-orange-400">Add Facualty</button>
      </div>
      <div className="h-[30%] w-[100%] flex justify-center items-center flex-col gap-12">
        {ComponentId === 2 && <AppointFacutaly/>}
    </div>
    </>
  );
}
