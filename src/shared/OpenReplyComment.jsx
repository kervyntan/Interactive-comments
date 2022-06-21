import React, { useState } from "react";
import AddComment from "../components/AddComment";
import img from "./image-juliusomo.png";
import Button from "../shared/Button";

const OpenReplyComment = (props) => {
  const [replytextarea, setReplyTextarea] = useState("");
  // const comment = useRef("");

  const replyCommentHandler = () => {
    console.log("clicked");
    window.alert("You've replied to the above comment : " + replytextarea);
    setReplyTextarea("");
  };

  const onTypeHandler = (e) => {
    setReplyTextarea(e.target.value);
  };
  return (
    <div className="container">
      <div className="add-comment-box">
        <div className="add-comment-box-dp">
          <img className="dp" src={img} alt="juluismo" />
        </div>

        <div className="add-comment-box-textarea">
          <form>
            <input
              type="textarea"
              placeholder="Add a comment..."
              value={replytextarea}
              onChange={onTypeHandler}
            />
          </form>
        </div>
        <div className="add-comment-box-button">
          <Button
            className="btn btn-send"
            onClickHandler={replyCommentHandler}
            type="submit"
            text="SEND"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenReplyComment;
