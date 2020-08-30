import React from 'react'
import Post from "../Post/Post";

const MyPosts = (props) => {
    let posts = props.state.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    return (
        <div>
            <div>
                <textarea>

                </textarea>
                <button>
                    Add
                </button>
            </div>
            <div className="posts">
                {posts}
            </div>
        </div>

    )
}

export default MyPosts