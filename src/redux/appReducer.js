import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "./types";

const initialState = {
  isLoading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        isLoading: true,
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};
export default appReducer;
