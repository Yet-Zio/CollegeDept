/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AccordionDropDown from "../../Shared/DropDown/Accordion";
import EmptyMessage from "../../Shared/Pages/EmptyMessage";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

export default function Query({ updateEventState  , id}) {

  

  const [ Events , setEvents] = useState([])

  const handleFetchContact = async() => {

    await axios.get('http://localhost:3000/api/admin/getContact')
    .then((res) => {
      console.log(res)
      setEvents(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

  } 

  useEffect(() => {
    if (id === "admin") {
      handleFetchContact();
    }
  }, [id]);

  return (
    <>
      <button
        onClick={() => {
          updateEventState(false);
        }}
        className="m-4 text-center fixed top-14 right-2"
      >
        {" "}
        <ClearIcon />
      </button>
      <div className="w-[100%] h-[100dvh]  flex justify-end items-center">
        <div className="h-[100%] w-[100%] overflow-auto flex flex-col justify-start items-start mt-52 me-2">
          {!(Events.length === 0) &&
            Events.map((item, index) => {
              return <AccordionDropDown  key={index} itemData={item} id={id} />;
            })}
          {Events.length === 0 && (
            <EmptyMessage emptyMessage={"History is Empty"} />
          )}
        </div>
      </div>
    </>
  );
}
