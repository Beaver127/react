import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
                <ProfileInfo  />
                <MyPosts state={props.state} />
        </div>
    )
}

export default Profile