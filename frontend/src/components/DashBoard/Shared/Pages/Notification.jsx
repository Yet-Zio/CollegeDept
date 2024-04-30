import { useEffect, useState } from "react";
import NotificationList from "../List/NotificationList";
import axios from "axios";
import { useSelector } from "react-redux";
const AssociateDataUrl= "http://localhost:3000/api/associate/getNotification/";
// eslint-disable-next-line react/prop-types
export default function Notification({option}) {
    const [NotificationMessage , setNotificationMessage] = useState([]);
    const [URL,setURL] = useState();
    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect (() => {
      console.log(option)
      if(option===2) setURL(AssociateDataUrl)
        const fetchNotification = async() => {
            await axios.get(`${URL+currentUser._id}`)
            .then((res) => {
                console.log( [... NotificationMessage])
                setNotificationMessage(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        } 

        fetchNotification();

    }  , [])

  return (
    <>  
      <div className="w-[100%] h-[100dvh] flex justify-end items-center">
        <div className="h-[100%] w-[100%] overflow-auto flex flex-col justify-start items-start mt-40">
            {!(NotificationMessage.length ===0) &&
                 <NotificationList
                 NotificationData={NotificationMessage}
                 />
            }
             
        </div>
      </div>
    </>
  )
}
