import React from "react"
import style from "./Content.module.css"
import {Route} from "react-router-dom" 
import Chats from './../Chats/Chats';
import Users from './../Users/Users';
import ProfileContainer from "../Profile/ProfileContainer";
const Content = (props) => {
  return<div className={style.siteContentWrap}>
    <Route path="/profile" component={ProfileContainer}/>
    <Route path="/chats" component={Chats}/>
    <Route path="/users" component={Users}/>
  </div>
}

export default Content