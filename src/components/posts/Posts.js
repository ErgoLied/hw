import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(({data}) => setPosts([...data]));
    });
    const choosePost = (value) => {
        console.log(value);
    }
  return (
    <div>
        <h2>POSTS</h2>
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {posts.map(value => <Post key={value.id} item={value}/>)}
            </div>
            <div className={'post-info'}>

            </div>
        </div>
    </div>
  );
}