import { INCREMENTLIKES, INCREMENTDISLIKES } from "./types";

const initialState = {
  likes: 0,
  dislikes: 0,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTLIKES:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case INCREMENTDISLIKES:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };
    default: {
      return state;
    }
  }
};

export default likesReducer;
