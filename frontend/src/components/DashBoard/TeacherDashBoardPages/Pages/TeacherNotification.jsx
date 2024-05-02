import { useState } from "react"
import NotificationList from "../../Shared/List/NotificationList"

import axios, { Axios } from "axios"
export default function TeacherNotification({id}) {

    const [NotificationMessage , setNotificatonMessage] = useState([
        {
            id: 1,
            time:"4:20 pm 24/2/2003",
            Message: "bijo during first break come to my room and on your knees under my bench"
        },
        {   id: 2,
            time:"4:20 pm 24/2/2003",
            Message: "Limited Member Offer: Get 25% off your next massage when you refer a friend. Offer expires [Date]. We hope to see you soon! [Business Name]"
        },
        {   id: 3,
            time:"4:20 pm 24/2/2003",
            Message: "Limited Member Offer: Get 25% off your next massage when you refer a friend. Offer expires [Date]. We hope to see you soon! [Business Name]"
        },
    ])

    if(id === 'teacher'){
        const handleFetchTeacher = async() => {
            await axios.get('http://localhost:3000/api/teacher/getTeacherNotification')
            .then((res) => {
                console.log(res)
                setNotificatonMessage(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }

        handleFetchTeacher();
    }

  return (
    <>  
      <div className="w-[100%] h-[100dvh] flex justify-end items-center">
        <div className="h-[100%] w-[100%] overflow-auto flex flex-col justify-start items-start mt-40">
            {!(NotificationMessage.length ===0) &&
                 <NotificationList
                 NotificationData={NotificationMessage}
                 DashBoardId={1}
                 />
            }
        </div>
      </div>
    </>
  )
}
