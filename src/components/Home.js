import React from "react";

import { Hero } from "./Hero";
import { About } from "./About";
import { AboutData } from "./Data";

export const Home = ({ isDarkTheme }) => {
  return (
    <>
      <Hero isDarkTheme={isDarkTheme} />
      <About isDarkTheme={isDarkTheme} {...AboutData} />
    </>
  );
};
