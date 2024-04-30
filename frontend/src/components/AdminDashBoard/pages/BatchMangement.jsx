
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
export default function BatchMangement() {
  return (
    <>
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
            <BatchTable/>
            <StudnetTable/>
        </div>
    </>
  )
}


  export function BatchTable() {
    function createData(slNo, batchName) {
        return { slNo, batchName };
      }
      
      const rows = [
        createData(1, 'batch2020'),
        createData(2, 'batch2069'),
      ];
      
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
            {rows.map((row) => (
              <TableRow key={row.slNo}>
                <TableCell align="center" component="th" scope="row">
                  {row.slNo}
                </TableCell>
                <TableCell align="center">{row.batchName}</TableCell>
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
    function createData(slNo, firstName, lastName, studentId) {
        return { slNo, firstName, lastName, studentId };
      }
      
      const rows = [
        createData(1, 'hello', '', '32021990'),
        createData(2, 'hello', '', '3202199088'),
        createData(3, 'hello', '', '1005'),
        createData(4, 'mahesh', '', '10005'),
      ];
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        // Add more options as needed
      ];
    
      const handleChange = (e) => {
        console.log(e)
        setSelectedOption(e.target.value)
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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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
          {rows.map((row) => (
            <TableRow key={row.slNo}>
              <TableCell align="center" component="th" scope="row">
                {row.slNo}
              </TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.studentId}</TableCell>
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
