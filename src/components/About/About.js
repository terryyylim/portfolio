import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";
import {
  AboutContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Body,
  Img,
  ImgWrap,
  IconRow,
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
} from "./AboutElements";

const emoji = require("emoji-dictionary");

export const About = ({ ...props }) => {
  const { isDarkTheme, colorCodes } = useContext(ThemeContext);

  return (
    <>
      <AboutContainer bgcolor={colorCodes.aboutBgCode} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine color={colorCodes.aboutBodyCode}>
                  {props.topLine}
                </TopLine>
                <Heading color={colorCodes.aboutHeadingCode}>
                  {props.heading}
                </Heading>
                <Body color={colorCodes.aboutBodyCode}>
                  Hello from {emoji.getUnicode("singapore")} !{" "}
                  {emoji.getUnicode("wave")}
                </Body>
                <Body color={colorCodes.aboutBodyCode}>
                  Currently working at <b>Gojek</b> as a Machine Learning
                  Engineer. My area of interest lies in <b>MLOps</b>,{" "}
                  <b>distributed systems</b> and <b>data engineering</b>.
                </Body>
                <Body color={colorCodes.aboutBodyCode}>
                  During my free time, I enjoy exploring new eateries, running,
                  playing table tennis and hitting the gym.
                </Body>
                <Body color={colorCodes.aboutBodyCode}>
                  Being an avid traveller, I relish researching about places,
                  finding myself some excitement for my next wanderlust...
                </Body>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={isDarkTheme ? props.darkImg : props.lightImg}
                  alt={props.alt}
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <IconRow>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <LinkedInIcon color={colorCodes.linkedinIconCode}>
                <Link
                  to={{
                    pathname: props.linkedinLink,
                  }}
                  className="link"
                  target="_blank">
                  <FaLinkedin />
                </Link>
              </LinkedInIcon>
            </motion.div>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <GithubIcon color={colorCodes.githubIconCode}>
                <Link
                  to={{ pathname: props.githubLink }}
                  className="link"
                  target="_blank">
                  <FaGithub />
                </Link>
              </GithubIcon>
            </motion.div>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <MediumIcon color={colorCodes.mediumIconCode}>
                <Link
                  to={{ pathname: props.mediumLink }}
                  className="link"
                  target="_blank">
                  <FaMedium />
                </Link>
              </MediumIcon>
            </motion.div>
          </IconRow>
        </InfoWrapper>
      </AboutContainer>
    </>
  );
};
