import { useEffect, useState } from "react";
import Table from "../pages/DataTable";
import StaffMangementOptoins from "../pages/StaffMangementOptoins";
import StaffManager from "../pages/StaffManager";

const GetTeacherURL = "http://localhost:3000/api/teacher/getTeacher";
export default function StaffMangerLayout() {
  const [itemid, setItemId] = useState(0)
  const [currentURL, SetCurrentURL] = useState();
  useEffect(()=>{
    if(itemid === 1){
      SetCurrentURL(GetTeacherURL)
      console.log(itemid)
    }
    if(itemid===3)
    console.log(itemid)
  },[itemid])
  return (
    <>
        <div className="h-[100dvh] w-[100%] flex flex-col justify-center items-start">
            <div className="w-[98%] h-[90%] mt-20">
                { itemid === 0 && <StaffMangementOptoins changeItemId={setItemId}/>}
              { itemid === 1 &&<Table ChangeState={setItemId} fETCHcurrentURl={currentURL}/>}
              { itemid === 2 &&(<><StaffManager ChangeState={setItemId} ComponentId={2}/></>)}
              { itemid === 3 &&<Table ChangeState={setItemId} fETCHcurrentURl={currentURL}/>}
              { itemid === 4 &&(<><StaffManager ChangeState={setItemId} ComponentId={4}/></>)}
            </div>
        </div>
    </>
  )
}
