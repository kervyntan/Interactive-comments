import React, { useEffect, useState } from "react";
import Upvote from "../shared/Upvote";
import amy from "../assets/avatars/image-amyrobson.png";
import max from "../assets/avatars/image-maxblagun.png";
import Reply from "../shared/Reply";

const CommentItem = (props) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="comment-item">
        <div className="comment-item-upvote">
          <Upvote />
        </div>
        <div className="comment-item-content">
          <div className="comment-item-profile">
            <div className="profile-photo">
              <img className="dp" src={amy} alt="amy" />
            </div>

            <div className="profile-name">amyrobson</div>

            <div className="profile-last-seen">1 month ago</div>

            <div className="reply">
              <Reply />
            </div>
          </div>
          <p className="comment-item-text">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
