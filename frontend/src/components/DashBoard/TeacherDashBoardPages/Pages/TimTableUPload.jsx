import * as React from 'react';
import { useState } from 'react';
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5'];

const defaultSubjects = ['Math', 'C++', 'English', 'Science', 'History'];

export default function TimeTableUpload() {
  const [timetable, setTimetable] = useState(
    periods.map((period, periodIndex) => ({
      period,
      subjects: defaultSubjects.map((subject, subjectIndex) => ({
        id: `${periodIndex}-${subjectIndex}`, // Generate unique ID for each cell
        value: subject,
      })),
    }))
  );

  const handleSubjectChange = (periodIndex, subjectIndex, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[periodIndex].subjects[subjectIndex].value = value;
    setTimetable(updatedTimetable);
    console.log(updatedTimetable)
  };

  const handleUpload = () => {
    console.log(timetable); // Send timetable data to backend or perform further actions
  };

  return (
   <div className="h-[100dvh] w-[100%] flex justify-center items-center">
    <div className="">
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
      <Button color='success' variant="contained" onClick={handleUpload}>
        Upload Timetable
      </Button>
    </TableContainer>
    </div>
   </div>
  );
}
