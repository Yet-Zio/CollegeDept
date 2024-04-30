
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
const StudentProfileUrl = "http://localhost:3000/api/associate/updateAssociate/";
export default function TeacherProfile({Option}) {
    const [isEditProfile,setEditComponent] = useState(false);
    const [CurrentURL, SetCurrentURL] = useState();
    useEffect(()=>{
      if(Option ==2 ) SetCurrentURL(StudentProfileUrl); 
    },[])
  return (
    <>
       {isEditProfile &&  <UpdateProfile updateState={setEditComponent} URL = {CurrentURL}/> }
       {!isEditProfile && <Profile updateState={setEditComponent} /> }
    </>
  )
}
