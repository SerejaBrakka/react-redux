import React from "react";
import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "../redux/actions";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");

  let comments = useSelector((state) => {
    const { commentReducer } = state;
    return commentReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
     dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput}></input>
        <input type="submit" hidden></input>
      </form>
      {!!comments.length &&
        comments.map((e) => {
          return <SingleComment key={e.id} data={e} />;
        })}
    </div>
  );
};

export default Comments;
