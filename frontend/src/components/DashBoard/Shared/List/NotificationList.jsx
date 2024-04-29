/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import benzi from '../../../../assets/benzi.png'

export default function NotificationList({NotificationData}) {
  return (
   <>
        <List sx={{ width: '99%', bgcolor: '#E5E7EB' }}>
      { NotificationData.map((item)=>{
        return (
            <ListItem key={item.id} sx={{ marginBottom: '10px' , backgroundColor: 'white' ,boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', }} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={benzi} />
            </ListItemAvatar>
            <ListItemText
              primary={" Benziger Raj"}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.time}
                   
                  </Typography>
                    {<p className="text-black text-[.900rem] mt-2 text-justify">{item.Message}</p>}
               </>
              }
            />
            </ListItem>
        )
      })



      }
      </List>
   </>
  )
}
