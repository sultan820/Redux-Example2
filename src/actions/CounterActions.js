import { INCREMENT, DECREMENT, CLEAR, SET } from "./types";
export const counterIncrement = () => {
  return {
    type: INCREMENT
  };
};
export const counterDecrement = () => {
  return {
    type: DECREMENT
  };
};
export const clearCounter = () => {
  return {
    type: CLEAR
  };
};
export const counterSet = receivedNumber => {
  return {
    type: SET,
    payload: receivedNumber
  };
};
