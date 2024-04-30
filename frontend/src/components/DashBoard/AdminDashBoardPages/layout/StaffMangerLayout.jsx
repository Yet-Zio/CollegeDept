import { useState } from "react";
import Table from "../pages/DataTable";
import StaffMangementOptoins from "../pages/StaffMangementOptoins";
import StaffManager from "../pages/StaffManager";


export default function StaffMangerLayout() {
  const [itemid, setItemId] = useState(0)
  return (
    <>
        <div className="h-[100dvh] w-[100%] flex flex-col justify-center items-start">
            <div className="w-[98%] h-[90%] mt-20">
                { itemid === 0 && <StaffMangementOptoins changeItemId={setItemId}/>}
              { itemid === 1 &&<Table ChangeState={setItemId}/>}
              { itemid === 2 &&(<><StaffManager ChangeState={setItemId} ComponentId={2}/></>)}
              { itemid === 3 &&<Table ChangeState={setItemId}/>}
              { itemid === 4 &&(<><StaffManager ChangeState={setItemId} ComponentId={4}/></>)}
            </div>
        </div>
    </>
  )
}
