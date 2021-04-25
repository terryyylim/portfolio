import styled from "styled-components";

// import { Theme } from "../Data";

export const HeroContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 880px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000000;

  opacity: ${({ isDarkTheme }) => (isDarkTheme ? "0.4" : "0.8")};
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContentH1 = styled.div`
  text-align: center;
  align-items: flex-start;

  h1.hi {
    color: ${({ color }) => color};
    padding: 5rem 2rem;
    margin-bottom: -5rem;
    font-size: 5rem;
  }

  h1.name {
    padding: 0rem 2rem;
    color: ${({ color }) => color};
    margin-bottom: -5rem;
    font-size: 5rem;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

export const HeroContentP = styled.div`
  font-size: 4rem;
  margin: 2rem 2rem;
  line-height: 1.1;

  p.role {
    color: ${({ color }) => {
      console.log(color);
      return color;
    }};
    padding-top: 3rem;
    font-size: 2rem;
    font-style: italic;
  }
`;
