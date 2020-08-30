import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profile__body}>
            <div className={s.profile__img}></div>
            <div className={s.profile_description}>
                <div className={s.profile_description__text}>
                    Last Beaver it is cool
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo