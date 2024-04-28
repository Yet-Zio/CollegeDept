import { useState } from "react";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";

export default function ProfileContainer() {
    const [isEditProfile,setEditComponent] = useState(false);
  return (
    <>
       {isEditProfile &&  <UpdateProfile updateState={setEditComponent} /> }
       {!isEditProfile && <Profile updateState={setEditComponent}/>}
    </>
  )
}
