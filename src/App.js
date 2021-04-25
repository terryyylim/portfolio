import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeContextProvider } from "./contexts";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Page404 } from "./components/Page404";

import "./App.css";

function App() {
  const [isDarkTheme, toggleDarkTheme] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeContextProvider isDarkTheme={isDarkTheme}>
      <Sidebar
        isDarkTheme={isDarkTheme}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <Navbar
        isDarkTheme={isDarkTheme}
        toggleOpen={toggleOpen}
        toggleDarkTheme={toggleDarkTheme}
      />
      <Switch>
        <Route exact path="/">
          <Home isDarkTheme={isDarkTheme} />
        </Route>
        <Route exact path="/portfolio">
          <Home isDarkTheme={isDarkTheme} />
        </Route>
        <Route exact path="/portfolio/*">
          <Page404 />
        </Route>
      </Switch>
    </ThemeContextProvider>
  );
}

export default App;
