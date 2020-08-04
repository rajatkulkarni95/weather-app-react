import React, { useState, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./containers";
import { darkTheme, lightTheme } from "./theme";
import { reducer, initialState } from "./reducers";

export const WeatherContext = React.createContext(initialState);
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={state.isDarkMode ? darkTheme : lightTheme}>
      <WeatherContext.Provider value={[state, dispatch]}>
        <GlobalStyle />
        <Container />
      </WeatherContext.Provider>
    </ThemeProvider>
  );
};
