import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:3000/api/student/fetchTimeTable/";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TimeTable() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const [batch, setBatch] = useState(currentUser.batch); // Initialize state with currentUser.batch directly
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const res = await axios.get(`${url}${batch}`);
        setResponse(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchTimeTable();
  }, [batch]); // Add batch as a dependency to the useEffect hook

  return (
    <>
      <div className="w-[100%] h-[100dvh] flex justify-center items-center">
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
                {response !== null &&
                  Object.keys(response).map((day) => (
                    <StyledTableRow key={day}>
                      <StyledTableCell component="th" scope="row">
                        {day}
                      </StyledTableCell>
                      {response[day].map((period, index) => (
                        <React.Fragment key={index}>
                          <StyledTableCell align="right">
                            {period.firstPeriod}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {period.secondPeriod}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {period.thirdPeriod}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {period.fourthPeriod}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {period.fifthPeriod}
                          </StyledTableCell>
                        </React.Fragment>
                      ))}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

