import { LOGIN } from "../Actions/types";

const initialState = {
  data: [],
};

const adminSummary = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default adminSummary;
