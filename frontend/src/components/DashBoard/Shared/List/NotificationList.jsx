/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import benzi from "../../../../assets/benzi.png";

import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import Swal from "sweetalert2";


export default function NotificationList({ NotificationData ,DashBoardId , id}) {
  const dataToRender = Array.isArray(NotificationData) ? NotificationData : [];

  const handleApprove = async(id) => {

    await axios.post(`http://localhost:3000/api/admin/manageLeaveLetter/${id}` , {status: "Approved"})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Approved",
        text: "Leave letter was approved",
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

  }

  const handleReject = async(id) => {
    await axios.post(`http://localhost:3000/api/admin/manageLeaveLetter/${id}` , {status: "Declined"})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Declined",
        text: "Leave letter was declined",
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
  }

  return (
    
      <List sx={{ width: "99%", bgcolor: "#E5E7EB", marginBottom: "10dvh" }}>
        {dataToRender?.map((item) => {
          return (
            <ListItem
              key={id === 'admin' ? item.teacher : item._id}
              sx={{
                marginBottom: "10px",
                display: "grid",
                backgroundColor: "white",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              alignItems="flex-start"
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={benzi} />
                </ListItemAvatar>
                <ListItemText
                  primary={" Benziger Raj"}
                  secondary={
                    
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.createdAt}
                      </Typography>
                    
                  }
                />
              </ListItem>
              <ListItemText primary={id === 'admin'? item.message : item.details} />
              <ListItemText>
              {DashBoardId === 0 && (
    <div className="w-[100%] mt-4 h-[10%] gap-10 justify-center items-center">
      <Button 
      onClick={() => handleApprove(item.teacher)}
      style={{marginLeft: "10px"}} endIcon={<CheckIcon/>} variant="contained" color="success">
        Approve 
      </Button>
      <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button 
      onClick={() => handleReject(item.teacher)}
      endIcon={<ClearIcon/>} variant="contained" color="error">
        Reject
      </Button>
    </div>
  )}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    
  );
}
