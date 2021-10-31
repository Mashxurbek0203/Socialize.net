import React from "react";
import style from "./ProfileName.module.css"

const ProfileName = ({name}) => {
  return (
    <div className={style.profileInfoWrap}>
          <div className={style.profileNameWrap}>
            <p className={style.profileName}>{name}</p>
            <span className={style.profileStatus}>My status</span>
          </div>
    </div>
  )
}

export default ProfileName