import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5'];

const defaultSubjects = ['Math', 'C++', 'English', 'Science', 'History'];

const days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday']

export default function TimeTableUpload() {
  const [batch, setBatch] = useState([]); 

  const [selectedBatch , setSelectedBatch] = useState("");

  const [timetable, setTimetable] = useState(
    days.map((period, periodIndex) => ({
      period,
      subjects: defaultSubjects.map((subject, subjectIndex) => ({
        id: `${periodIndex}-${subjectIndex}`,
        value: subject,
      })),
    }))
  );

  console.log("checking" , timetable)

  const handleSubjectChange = (periodIndex, subjectIndex, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[periodIndex].subjects[subjectIndex].value = value;
    setTimetable(updatedTimetable);
    console.log(updatedTimetable);
  };

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

  const [timeTableData , setTimeTableData] = useState({})

  const handleUpload = async(e) => {
    e.preventDefault();

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const dayObjects = {};

    days.forEach((day, index) => {
        const dayArray = timetable[index].subjects;
        const dayValues = dayArray.map(subject => subject.value);

        dayObjects[`${day}`] = {
            firstPeriod: dayValues[0],
            secondPeriod: dayValues[1],
            thirdPeriod: dayValues[2],
            fourthPeriod: dayValues[3],
            fifthPeriod: dayValues[4]
        };
        
        setTimeTableData(dayObjects)
    });


    await axios.post('http://localhost:3000/api/teacher/uploadTimeTable' , {batch: selectedBatch , timeTableData})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Time Table Uploaded Successfully",
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
  };

  return (
    <div className="h-[100dvh] w-[100%] flex justify-center items-center">
      <div className="">
        <Select className='mb-2' onChange={(e) => {setSelectedBatch(e.target.value)}} displayEmpty>
          {batch.map((item , index) => {
            return(
              <MenuItem key={index} value={item}>{item}</MenuItem>
            )
          })}
        </Select>

        {/* Timetable Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Period</StyledTableCell>
                {periods.map((period, index) => (
                  <StyledTableCell key={index} align="center">
                    {period}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {timetable.map((row, periodIndex) => (
                <StyledTableRow key={periodIndex}>
                  <StyledTableCell component="th" scope="row">
                    {row.period}
                  </StyledTableCell>
                  {row.subjects.map(({ id, value }, subjectIndex) => (
                    <StyledTableCell key={id} align="center">
                      <TextField
                        value={value}
                        onChange={(e) => handleSubjectChange(periodIndex, subjectIndex, e.target.value)}
                      />
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Button color="success" variant="contained" onClick={handleUpload}>
            Upload Timetable
          </Button>
        </TableContainer>
      </div>
    </div>
  );
}
