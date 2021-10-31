import React from "react";
import style from "./ProfileJob.module.css"
const ProfileJob = ({needJob, jobCateg}) => {
return (
<div className={style.profileJobStatusWrap}>
  <p className={style.profileJobStatusTitle}>Work status</p>
  <div className={style.profileJobStatus}>
    <p className={style.profileJobStatusSubTitle}>Seeking a job:</p>
    <p className={style.profileJobStatusDesc}>{needJob ? 'Yes' : 'No'}</p>
  </div>
  <div className={style.profileJobCateg}>
    <p className={style.profileJobCategTitle}>Majors in:</p>
    <p className={style.profileJobCategDesc}>{jobCateg ||"Frontend"}</p>
  </div>
</div>
)
}

export default ProfileJob