import { useContext } from "react";
import { WeatherContext } from "../App";

export const useFavourites = () => {
  const [state, dispatch] = useContext(WeatherContext);

  const getFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favorites")) || [];
    dispatch({ type: "favourites", payload: favourites });
  };

  const setFavourites = () => {
    let favourites = state.favourites;
    if (state.weather.name !== undefined) {
      if (favourites.indexOf(state.weather.name) === -1) {
        favourites.push(state.weather.name);
        localStorage.setItem("favorites", JSON.stringify(favourites));
        dispatch({ type: "favourites", payload: favourites });
      } else {
        const index = favourites.indexOf(state.weather.name);
        favourites.splice(index, 1);
        dispatch({ type: "favourites", payload: favourites });
        localStorage.setItem("favorites", JSON.stringify(favourites));
      }
    }
  };

  return { getFavourites, setFavourites };
};
