import {
  INCREMENTDISLIKES,
  INCREMENTLIKES,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENTLIKES,
  };
}
export function incrementDislikes() {
  return {
    type: INCREMENTDISLIKES,
  };
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}
export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}
export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}
export function loaderDisplayOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function loaderDisplayOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}
export function commentsLoad() {
  return async (dispatch) => {
    dispatch(loaderDisplayOn());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();

    setTimeout(() => {
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
      dispatch(loaderDisplayOff());
    }, 1000);
  };
}
