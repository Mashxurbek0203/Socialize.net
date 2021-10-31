import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"
const Navbar = (props) => {
  return<div className={style.siteNavWrapper}>
    <nav className={style.siteNav}>
      <ul className={style.siteNavList}>
        <li className={style.siteNavItem}>
          <NavLink to="/profile" activeClassName={style.activeNavItem} className={style.siteNavLink}>My Page</NavLink>
        </li>
        <li className={style.siteNavItem}>
          <NavLink to="/users" activeClassName={style.activeNavItem} className={style.siteNavLink}>Users</NavLink>
        </li>
        <li className={style.siteNavItem}>
          <NavLink to="chats" activeClassName={style.activeNavItem} className={style.siteNavLink}>Chats</NavLink>
        </li>
        <li className={style.siteNavItem}>
          <NavLink to="/oprions" activeClassName={style.activeNavItem} className={style.siteNavLink}>Options</NavLink>
        </li>
      </ul>
    </nav>
  </div>
}

export default Navbar