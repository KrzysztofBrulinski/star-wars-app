import { createStore } from "redux";

const rootReducer = (state = { wishlist: {} }, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    return {
      wishlist: { ...state.wishlist, ...action.value },
    };
  }

  if (action.type === "REMOVE_FROM_WISHLIST") {
    const wishlist = { ...state.wishlist };

    delete wishlist[action.id];
    return {
      wishlist,
    };
  }

  return state;
};

const store = createStore(rootReducer);
export default store;
