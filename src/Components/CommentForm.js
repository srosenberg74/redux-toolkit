import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Utils/commentSlice";
import { setModalVisible } from "../Utils/appSlice";
import "../App.css";

function CommentForm() {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const submitComment = () => {
    dispatch(addComment(comment));
    dispatch(setModalVisible(false));
  };

  return (
    <>
      <div>Comment Form</div>
      <textarea
        placeholder="add your comment"
        value={comment}
        onChange={handleChange}
        className="text-area"
        rows={8}
        cols={35}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitComment();
          } else {
              console.log(e)
          }
        }}
      ></textarea>
      <button onClick={submitComment}>Submit</button>
    </>
  );
}

export default CommentForm;
