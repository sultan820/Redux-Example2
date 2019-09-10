import { INCREMENT, DECREMENT, CLEAR, SET } from "../actions/types";
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return 0;
    case SET:
      return action.payload;
    default:
      return state;
  }
};
