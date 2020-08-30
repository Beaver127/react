import React from "react"
//безопасное генерирование стилей, работа через css-модули
// делает так чтобы классы никогда не пересикались в названих
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__body}>
                <div className={s.navbar_list}>
                    <div className={s.navbar_list__item}>
                        {/*
                        activeClassname - указывает на то какой будет добавляться класс активности при нажатии
                        по ссылке
                        to - смена url строки (History API)
                        <NavLink> - меняет url но никак не связан с роутами роуты сами слущают изменение строки
                        url, чтобы элементы правильно работали то есть передавался класс нужно ставить у каждого элемента
                        разные атрибут to
                        */}
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