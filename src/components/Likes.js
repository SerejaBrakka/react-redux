import React from "react";
import { connect } from "react-redux";
import { incrementLikes } from "../redux/actions";
import { incrementDislikes } from "../redux/actions";
const Likes = (props) => {
  console.log(props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
      <button onClick={props.onDecrementLikes}>👎{props.dislikes}</button>
    </div>
  );
};

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
    dislikes: likesReducer.dislikes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),

    onDecrementLikes: () => dispatch(incrementDislikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
