export const rootReducer = (
  state = { wishlist: {}, galaxyBackgroundImage: "" },
  action
) => {
  if (action.type === "ADD_TO_WISHLIST") {
    return {
      ...state,
      wishlist: { ...state.wishlist, ...action.value },
    };
  }

  if (action.type === "REMOVE_FROM_WISHLIST") {
    const wishlist = { ...state.wishlist };
    delete wishlist[action.value];
    return {
      ...state,
      wishlist,
    };
  }

  if (action.type === "SET_GALAXY_BACKGROUND") {
    return { ...state, galaxyBackgroundImage: action.value };
  }

  return state;
};
