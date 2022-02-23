import "./Comments.css";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Comment from "../Comment/Comment";
import { addComments, getCommentsOfVideoById } from "../../Redux/Actions/CommentsAction";
const Comments = ({videoId}) => {
  
  /////////////
  ///////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
    
  }, [dispatch,videoId]);
  const comments = useSelector(state => state.Comments.comments)
  console.log(comments?.length);
  
  // if(comments){
    const [text, settext] = useState('')
    const _comments= comments?.map(comments=>(comments.snippet.topLevelComment.snippet))
    // }
    const handleComment = (e) => {
      e.preventDefault()
      if(text.length===0)return
      dispatch(addComments(videoId,text))
    };
  return (
    <div className="comments">
      <p> Comments</p>
      {/* {totalComments} */}
      <div className="my-2 comments__form d-flex w-100">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="mr-3 rounded-circle comments__formimg"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            className="comments__forminput"
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
             value={text}
             onChange={e => settext(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {/* {[...Array(20)].map(() => (
          <Comment />
        ))} */}
        {_comments?.map((comment, i) => (
              <Comment comment={comment} key={i} />
           ))}
      </div>
    </div>
  );
};

export default Comments;
