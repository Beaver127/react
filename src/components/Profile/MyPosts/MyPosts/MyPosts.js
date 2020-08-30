import React from 'react'
import Post from "../Post/Post";

const MyPosts = (props) => {
    //принимаем массив данных и преобразовываем их в массив компонентов с этими данными с помощью map
    let posts = props.state.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    //создаем ссылку на объект для обращения к нему
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div>
            <div>
                {/*привязываем ссылку к элементу*/}
                <textarea ref={newPostElement}>

                </textarea>
                <button onClick={addPost}>
                    Add
                </button>
            </div>
            <div className="posts">
                {/*реакт разворачивает массив сам*/}
                {posts}
            </div>
        </div>

    )
}

export default MyPosts