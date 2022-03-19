import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../redux/actions/comments.action";
import "./comments.scss";
import Comment from "../Comment/Comment";

const Comments = ({ videoId, totalComments }) => {
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const auth = useSelector((state) => state.auth);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      setPhoto(auth.user.photoURL);
    }
  }, []);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form">
        <img src={photo} alt="avatar" className="rounded-circle" />
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
