export type StateTypes = {
  wishlist: { id: string; name: string }[];
  galaxyBackgroundImage: string;
  alerts: { text: string; color?: string; id: number }[];
};

type ActionTypes = {
  type: string;
  value:
    | string
    | { id: string; name: string }
    | { text: string; color?: string; id: number };
};

const actions = {
  addToWishlist: "ADD_TO_WISHLIST",
  removeFromWishlist: "REMOVE_FROM_WISHLIST",
  setGalaxyBackground: "SET_GALAXY_BACKGROUND",
  setAlert: "SET_ALERT",
  clearAlerts: "CLEAR_ALERTS",
};

export const rootReducer = (
  state: StateTypes = { wishlist: [], galaxyBackgroundImage: "", alerts: [] },
  action: ActionTypes
) => {
  switch (action.type) {
    case actions.addToWishlist:
      return {
        ...state,
        wishlist: [...state.wishlist, action.value],
      };

    case actions.removeFromWishlist:
      const wishlist = state.wishlist.filter((el) => el.id !== action.value);
      return {
        ...state,
        wishlist,
      };

    case actions.setGalaxyBackground:
      return { ...state, galaxyBackgroundImage: action.value };

    case actions.setAlert:
      return { ...state, alerts: [...state.alerts, action.value] };

    case actions.clearAlerts:
      return {
        ...state,
        alerts: [],
      };

    default:
      return state;
  }
};
