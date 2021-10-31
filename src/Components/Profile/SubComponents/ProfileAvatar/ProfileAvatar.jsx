import React from "react";
import style from "./ProfileAvatar.module.css"
import userIcon from "./../../../../assets/Images/userIcon.png"
const ProfileAvatar = ({photo}) => {
  return (
    <div className={style.profileImgMainWrap}>
          <span className={style.profileImgWrap}>
            <img src={photo || userIcon} alt="user" width="120" height="120"/>
          </span>
        </div>
  )
}

export default ProfileAvatar