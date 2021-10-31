import React from "react";
import style from "./Profile.module.css"
import Preloader from "../Common/Preloader/Preloader";
import ProfileJob from "./SubComponents/ProfileJob/ProfileJob";
import ProfileAvatar from "./SubComponents/ProfileAvatar/ProfileAvatar";
import ProfileName from "./SubComponents/ProfileName/ProfileName";
import ProfileContacts from "./SubComponents/Contact/ProfileContacts";
const Profile = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={style.profileMainWrap}>
      <div className={style.profileWrap}>
        <ProfileAvatar photo={props.profile.photos.large}/>
        <ProfileName name={props.profile.fullName}/>
        <div className={style.profileJob}>
          <ProfileJob needJob={props.profile.lookingForAJob} jobCateg={props.profile.lookingForAJobDescription}/>
          <ProfileContacts contacts={props.profile.contacts}/>
        </div>
      </div>
    </div>
  )
}

export default Profile