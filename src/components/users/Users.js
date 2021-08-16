import User from "../user/User";
import "./Users.css";
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/users.servise";
import Post from "../post/Post";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);
    let [user, setUser] = useState(null);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    });
    const chooseUser = (usr) => {
        setUser({...usr});
        getPostsOfUser(usr.id).then(({data}) => setPosts([...data]));
    }
  return (
    <div className={'wrap'}>
        <div className={'user-box'}>
            {
                users.map((value) => <User key={value.id} item={value} chooseUser={chooseUser}/>)
            }
        </div>
        <div className={'choose-usr'}>
            {user && (<div>{
                posts.map((value) => <Post key={value.id} item={value}/>)
            }</div>)}
        </div>
    </div>
  );
}