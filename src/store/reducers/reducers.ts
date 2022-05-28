export const rootReducer = (
  state = { wishlist: {}, galaxyBackgroundImage: "", alerts: [] },
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
    delete wishlist[action.id];
    return {
      ...state,
      wishlist,
    };
  }

  if (action.type === "SET_GALAXY_BACKGROUND") {
    return { ...state, galaxyBackgroundImage: action.value };
  }

  if (action.type === "SET_ALERT") {
    return { ...state, alerts: [...state.alerts, action.value] };
  }

  if (action.type === "CLEAR_ALERTS") {
    return {
      ...state,
      alerts: [],
    };
  }
  return state;
};
