import React from "react";
import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "../redux/actions";
import { useDispatch } from "react-redux";

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  let handleInput = (e) => {
    setCommentText(e.target.value);
  };

  let handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  let handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput}></input>

      <input type="submit" hidden></input>
    </form>
  );
};

export default SingleComment;
