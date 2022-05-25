import { createStore } from "redux";

const reducerFn = (state = { cursor: {} }, action) => {
  if (action.type === "CURSOR") {
    return {
      cursor: { ...action.cursor },
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
