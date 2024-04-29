import NotificationList from "../List/NotificationList";

export default function Notification() {
    const NotificationMessage = [
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
        {   id: 4,
            time:"4:20 pm 24/2/2003",
            Message: "Limited Member Offer: Get 25% off your next massage when you refer a friend. Offer expires [Date]. We hope to see you soon! [Business Name]"
        },
        {      id: 5,
            time:"4:20 pm 24/2/2003",
            Message: "Limited Member Offer: Get 25% off your next massage when you refer a friend. Offer expires [Date]. We hope to see you soon! [Business Name]"
        },
        {   id: 6,
            time:"4:20 pm 24/2/2003",
            Message: "Limited Member Offer: Get 25% off your next massage when you refer a friend. Offer expires [Date]. We hope to see you soon! [Business Name]"
        },
    ]
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
