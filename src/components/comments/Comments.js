import {useEffect, useState} from "react";
import {getComments} from "../../services/posts.service";
import Comment from "../comment/Comment";
import CommentInfo from "../commentinfo/CommentInfo";

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);
    useEffect(()=>{
        getComments().then(({data}) => setComments([...data]));
    });
    const chooseComment = (value) => {
        setComment({...value});
    }
  return (
    <div>
        <h2>COMMENTS</h2>
        <div className={'wrap'}>
            <div className={'comms-box'}>
                {comments.map(value => <Comment key={value.id} item={value} chooseComment={chooseComment}/>)}
            </div>
            <div className={'comm-info'}>
                <div>{
                    comment && ( <CommentInfo key={comment.id} item={comment}/>
                    )
                }</div>
            </div>
        </div>
    </div>
  );
}