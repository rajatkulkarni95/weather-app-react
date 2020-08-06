const initialState = {
  location: "",
  weather: {},
  forecast: [],
  tempScale: "C",
  isLoading: true,
  isDarkMode: true,
  isFavoritesOpen: false,
  favourites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "location":
      return {
        ...state,
        location: action.payload,
      };
    case "weather":
      return {
        ...state,
        weather: action.payload,
      };
    case "forecast":
      return {
        ...state,
        forecast: action.payload,
      };
    case "tempScale":
      return {
        ...state,
        tempScale: action.payload,
      };
    case "isLoading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "isDarkMode":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case "showFavourites":
      return {
        ...state,
        isFavoritesOpen: action.payload,
      };
    case "favourites":
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
