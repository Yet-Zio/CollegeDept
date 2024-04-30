import { useEffect, useState } from "react";
import NotificationList from "../List/NotificationList";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Notification() {
    const [NotificationMessage , setNotificationMessage] = useState([]);

    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect (() => {

        const fetchNotification = async() => {
            await axios.get(`http://localhost:3000/api/associate/getNotification/${currentUser._id}`)
            .then((res) => {
                console.log(res)
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
