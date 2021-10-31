import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./../../assets/Images/logo.svg"
import userDefault from "./../../assets/Images/userDefault.png"
import style from "./Header.module.css"
const Header = (props) => {
  return<>
  <header className={style.mainHeader}>
    <div className={style.mainHeaderInner}>
      <NavLink to="/" className={style.mainHeaderLogoLink}>
        <img src={Logo} alt="Logo" width="33"  className={style.mainHeaderLogoImg}/>
      </NavLink>
      <div className={style.mainHeaderSearchContainer}>
      <span className={style.mainHeaderSearchWrap}>
      <input type="text" className={style.mainHeaderSearch}
      placeholder="Search"
      />
      </span>
      </div>
      <div className={style.mainHeaderProfileWrap}>
        <span className={style.mainHeaderProfileName}>Jack</span>
        <img src={userDefault} alt="profileImage" width="28" height="28" className={style.mainHeaderProfileImg}/>
      </div>
    </div>
  </header>
  </>
}

export default Header