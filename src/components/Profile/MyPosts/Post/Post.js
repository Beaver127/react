import React from 'react'
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div>
            <div className={s.white}>Message: {props.message}</div>
            <div className={s.white}>Likes: {props.likesCount}</div>
            <div className={s.white}>Id: {props.id}</div>
        </div>
    )
}

export default Post