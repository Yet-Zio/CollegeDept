
import { useEffect, useState } from "react";
import NotificationList from "../../Shared/List/NotificationList";
import axios from "axios";

export default function Requests({id}) {

    const [NotificationMessage , setNotificationMessage] = useState([]);
    
    useEffect(() => {

        if( id === 'admin'){
            const fetchLeaveLetter = async() => {
                await axios.get(`http://localhost:3000/api/admin/getLeaveLetter`)
                .then((res) => {
                    console.log(res)
                    setNotificationMessage(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            fetchLeaveLetter();
        }

    } , [])
  return (
    <>  
      <div className="w-[100%] h-[100dvh] flex justify-end items-center">
        <div className="h-[100%] w-[100%] overflow-auto flex flex-col justify-start items-start mt-40">
            {!(NotificationMessage.length ===0) &&
                 <NotificationList
                 NotificationData={NotificationMessage}
                 DashBoardId={0}
                 id = {id}
                 />
            }
             
        </div>
      </div>
    </>
  )
}
