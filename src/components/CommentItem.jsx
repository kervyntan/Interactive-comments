import React, { useEffect, useState } from "react";
import Upvote from "../shared/Upvote";
import amy from "../assets/avatars/image-amyrobson.png";
import max from "../assets/avatars/image-maxblagun.png";
import Reply from "../shared/Reply";
import OpenReplyComment from "../shared/OpenReplyComment";

const CommentItem = (props) => {
  const [openReplyComment, setOpenReplyComment] = useState(false);

  const showReply = () => {
    setOpenReplyComment(true);
  };
  // const [data, setData] = useState(JSON.parse(JSON.stringify(json)))

  // const results = (data) => {
  //   const allData = data.comments.map((item) => {
  //     return item.content;
  //   });

  //   return allData;
  // };

  // const resultsPng = (data) => {
  //   const allPng = data.comments;
  // };

  // const values = results(data);
  // console.log(values);
  // console.log(data);

  return (
    <div className="container">
      <div className="comment-item">
        <div className="comment-item-upvote">
          <Upvote score={props.score} />
        </div>
        <div className="comment-item-content">
          <div className="comment-item-profile">
            <div className="profile-photo">
              <img className="dp" src={props.img} alt={props.profileName} />
            </div>

            <div className="profile-name">{props.profileName}</div>

            <div className="profile-last-seen">{props.lastSeen}</div>

            <div className="reply">
              <Reply showReply={showReply} />
            </div>
          </div>
          <p className="comment-item-text">{props.text}</p>
        </div>
      </div>

      {openReplyComment && (
        <div className="reply-comment">
          <OpenReplyComment />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
