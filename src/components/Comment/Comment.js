import React from "react";
import moment from "moment";

import "./comment.scss";

const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className="comment">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle" />
      <div className="comment__body">
        <p>
          {authorDisplayName} • <span>{moment(publishedAt).fromNow()}</span>
        </p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
