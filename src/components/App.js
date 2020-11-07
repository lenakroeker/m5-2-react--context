import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GameContext } from './GameContext'
import useInterval from "../hooks/use-interval.hook";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App(props) {
  const { numCookies,
    setNumCookies,
    cookiesPerSecond } = useContext(GameContext)

  useEffect(() => {
    let timeDifference = Math.round((Date.now() / 1000) - localStorage.getItem("time"));
    let awayCookies = timeDifference * cookiesPerSecond;
    setNumCookies(numCookies + awayCookies);
  }, [])

  useInterval(() => {
    const numOfGeneratedCookies = cookiesPerSecond;

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
