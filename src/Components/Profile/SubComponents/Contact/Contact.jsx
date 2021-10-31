import React from "react";
import style from "./ProfileContacts.module.css"
const Contact = (props) => {
return (
<li className={style.profileContactsItem}>
  <a href="/" className={style.profileContactsLink}>{props.contact}</a>
</li>
)
}

export default Contact