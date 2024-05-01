
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import UpdateProfile from "../../Shared/Pages/UpdateProfile";
import Profile from "../../Shared/Pages/Profile";

const TeacherCurrentProfile = "http://localhost:300/api/somethig/something/updatehere"
export default function TeacherProfile() {
    const [isEditProfile,setEditComponent] = useState(false);
    const [CurrentURL, SetCurrentURL] = useState();
    useEffect(()=>{
    SetCurrentURL(TeacherCurrentProfile); 
    },[])
  return (
    <>
       {isEditProfile &&  <UpdateProfile updateState={setEditComponent} userType={"teacher"} URL = {CurrentURL}/> }
       {!isEditProfile && <Profile updateState={setEditComponent} /> }
    </>
  )
}
