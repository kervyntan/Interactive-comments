import React, { useState, useRef } from "react";
import img from "./image-juliusomo.png";
import Button from "../shared/Button";

const AddComment = () => {
  const [textarea, setTextarea] = useState("");
  // const comment = useRef("");

  const addCommentHandler = () => {
    console.log("clicked");
    window.alert("You've submitted the following comment : " + textarea);
    setTextarea("");
  };

  const onTypeHandler = (e) => {
    setTextarea(e.target.value);
  };

  // console.log(comment);
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
              value={textarea}
              onChange={onTypeHandler}
            />
          </form>
        </div>
        <div className="add-comment-box-button">
          <Button
            className="btn btn-send"
            onClickHandler={addCommentHandler}
            type="submit"
            text="SEND"
          />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
