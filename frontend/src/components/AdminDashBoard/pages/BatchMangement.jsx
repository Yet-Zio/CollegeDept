
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

  
export default function BatchMangement() {
  return (
    
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
            <BatchTable/>
            <StudnetTable/>
        </div>
    
  )
}


  export function BatchTable() {

    const [batch , setBatch] = useState([]);
    

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
      
    return (
     <div className="w-[90%] h-[40%] flex flex-col justify-center items-center mt-20 me-4 overflow-auto">
        <div className="w-[100%] flex text-lg font-bold mb-2 justify-start">Batch</div>
         <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">SL. NO</TableCell>
              <TableCell align="center">BATCH NAME</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {batch.map((row , index) => (
              <TableRow key={row.slNo}>
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </div>
    );
  }
export function StudnetTable() {
    const [selectedOption, setSelectedOption] = useState('');
      const [batch , setBatch] = useState([]);
    

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

    const [student , setStudent] = useState([]);
    
      const handleChange = (e) => {
        let batch = e.target.value ; 
        setSelectedOption(batch)
        console.log(batch)
        setStudent([]);

        axios.post("http://localhost:3000/api/student/getStudent" , {batch})
        .then((res) => {
            setStudent(res.data);
            console.log(res)
            console.log(student)
        })
        .catch((err) => {
            console.log(err)
        })
      };
  return (
  <>
  <div className="w-[90%] h-[40%] flex flex-col justify-between items-center mt-20 me-4 overflow-auto">
        <div className="w-[100%] flex text-lg font-bold mb-2 justify-between"><span>Student</span>
            <div className="">
            <select
        className="block w-full max-w-md px-14 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {batch.map((option , index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
            </div>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center">SL. NO</TableCell>
            <TableCell align="center">FIRST NAME</TableCell>
            <TableCell align="center">LAST NAME</TableCell>
            <TableCell align="center">STUDENT ID</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row , index) => (
            <TableRow key={row._id}>
              <TableCell align="center" component="th" scope="row">
                {index + 1 }
              </TableCell>
              <TableCell align="center">{row.firstname}</TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="center">{row.studentID}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </>
  );
}
