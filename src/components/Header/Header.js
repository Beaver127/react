import React from 'react'
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
           <div className={s.header_body}>
                <div className={s.header__logo}>
                    <img src="logo.png" alt=""/>
                </div>
           </div>
        </header>
    )
}

export default Header