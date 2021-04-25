import React, { useContext } from "react";
import { motion } from "framer-motion";

import Video from "../../assets/videos/waves.mp4";
import { ThemeContext } from "../../contexts";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroContentH1,
  HeroContentP,
  VideoBg,
} from "./HeroElements";

export const Hero = () => {
  const { isDarkTheme, colorCodes } = useContext(ThemeContext);

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
            isDarkTheme={isDarkTheme}
          />
        </HeroBg>
        <HeroContent>
          <HeroContentH1 color={colorCodes.heroInfoBodyCode}>
            <h1 className="hi">Hi,</h1>
          </HeroContentH1>
          <HeroContentH1 color={colorCodes.heroInfoHeadingCode}>
            <motion.h1
              className="name"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 2 },
                },
                hidden: { opacity: 0 },
              }}>
              I'm Terence.
            </motion.h1>
          </HeroContentH1>
          <HeroContentP color={colorCodes.heroInfoBodyCode}>
            <p className="role">Software Engineer</p>
          </HeroContentP>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
