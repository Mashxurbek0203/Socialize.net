import React from "react";
import style from "./ProfileContacts.module.css"
import Contact from './Contact';
const ProfileContacts = ({contacts}) => {
  return (
    <div className={style.profileContactsWrap}>
            <p className={style.profileContactsTitle}>Contacts</p>
              {
                contacts.length > 0 
                ? <ul className={style.profileContactsList}>
                  {contacts.map(contact => contact && <Contact contact={contact}/>)}
                  </ul>
                :  <span>Sorry, the user didn't provide the contacts.</span>
              }
          </div>
  )
}

export default ProfileContacts