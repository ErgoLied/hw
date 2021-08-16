import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import PostInfo from "../postinfo/PostInfo";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    useEffect(()=>{
        getPosts().then(({data}) => setPosts([...data]));
    });
    const choosePost = (value) => {
        setPost({...value});
    }
  return (
    <div>
        <h2>POSTS</h2>
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {posts.map(value => <Post key={value.id} item={value} choosePost={choosePost}/>)}
            </div>
            <div className={'post-info'}>
                <div>{
                    post && ( <PostInfo key={post.id} item={post}/>
                    )
                }</div>
            </div>
        </div>
    </div>
  );
}