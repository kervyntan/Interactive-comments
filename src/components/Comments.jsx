import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import amy from "../assets/avatars/image-amyrobson.png";
import max from "../assets/avatars/image-maxblagun.png";
import Reply from "../shared/Reply";
import json from "../data/data.json";
import { uuid } from "uuidv4";

const Comments = () => {
  const data = JSON.parse(JSON.stringify(json));
  const arrComments = data.comments;

  console.log(data);
  const loopThrough = (item) => {
    return (
      <CommentItem
        key={Math.floor(Math.random() * 100)}
        profileName={item.user.username}
        lastSeen={item.createdAt}
        text={item.content}
        score={item.score}
        img={amy}
      />
    );
  };

  return (
    <div className="container">
      <div className="individual-comment-item">
        {arrComments.map(loopThrough)}
      </div>
    </div>
  );
};

export default Comments;
