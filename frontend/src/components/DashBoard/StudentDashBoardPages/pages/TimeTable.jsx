import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
  
  function createData(day, period1, period2, period3, period4, period5) {
    return { day, period1, period2, period3, period4, period5 };
  }
  
  const rows = [
    createData('Monday', 'Math', 'English', 'Science', 'History', 'Physical Education'),
    createData('Tuesday', 'English', 'Math', 'History', 'Science', 'Art'),
    createData('Wednesday', 'Science', 'History', 'Math', 'English', 'Music'),
    createData('Thursday', 'History', 'Science', 'Physical Education', 'Math', 'English'),
    createData('Friday', 'Physical Education', 'Art', 'English', 'Math', 'Science'),
  ];
  
export default function TimeTable() {
  return (
    <>
        <div className='w-[100%] h-[100dvh] flex justify-center items-center'>
            <div className="w-[80%] h-[100%] flex justify-center items-center">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="right">Period 1</StyledTableCell>
            <StyledTableCell align="right">Period 2</StyledTableCell>
            <StyledTableCell align="right">Period 3</StyledTableCell>
            <StyledTableCell align="right">Period 4</StyledTableCell>
            <StyledTableCell align="right">Period 5</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.day}>
              <StyledTableCell component="th" scope="row">
                {row.day}
              </StyledTableCell>
              <StyledTableCell align="right">{row.period1}</StyledTableCell>
              <StyledTableCell align="right">{row.period2}</StyledTableCell>
              <StyledTableCell align="right">{row.period3}</StyledTableCell>
              <StyledTableCell align="right">{row.period4}</StyledTableCell>
              <StyledTableCell align="right">{row.period5}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            </div>

        </div>
    </>
  )
}
