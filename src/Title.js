import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
  const dispatch = useDispatch();
  let handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };
  let text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange}></input>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Title;
