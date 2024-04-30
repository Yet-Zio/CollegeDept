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

export default function NotificationList({ NotificationData ,DashBoardId}) {
  return (
    <>
      <List sx={{ width: "99%", bgcolor: "#E5E7EB", marginBottom: "10dvh" }}>
        {NotificationData.map((item) => {
          return (
            <ListItem
              key={item.id}
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
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.time}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <ListItemText primary={item.Message} />
              <ListItemText>
              {DashBoardId === 0 && (
    <div className="w-[100%] mt-4 h-[10%] gap-10 justify-center items-center">
      <Button style={{marginLeft: "10px"}} endIcon={<CheckIcon/>} variant="contained" color="success">
        Approve 
      </Button>
      <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button endIcon={<ClearIcon/>} variant="contained" color="error">
        Reject
      </Button>
    </div>
  )}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
