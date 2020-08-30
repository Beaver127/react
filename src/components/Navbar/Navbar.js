import React from "react"
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__body}>
                <div className={s.navbar_list}>
                    <div className={s.navbar_list__item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.navbar_list__item}>
                        <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.navbar_list__item}>
                        <NavLink to="/News" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.navbar_list__item}>
                        <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.navbar_list__item}>
                        <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar