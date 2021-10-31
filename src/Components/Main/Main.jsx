import React from "react";
import Header from "../Header/Header";
import style from "./Main.module.css"
import Navbar from './../Navbar/Navbar';
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

const Main = (props) => {
  return (
    <div>
      <Header/>
      <main className={style.siteMain}>
        <div  className={style.siteMainWrap}>
        <Navbar className={style.siteNav}/>
        <Content className={style.siteContent}/>
        <Sidebar className={style.siteSidebar}/>
        </div>
      </main>
    </div>
  );
};


export default Main