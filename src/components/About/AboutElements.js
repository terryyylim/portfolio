import styled from "styled-components";

// import { Theme } from "../Data";

export const AboutContainer = styled.div`
  background: ${({ bgcolor }) => bgcolor};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 880px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: ${(imgStart) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 0 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 20px;
  grid-area: col2;
`;

export const IconRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  grid-template-areas: "col1 col2 col3";
  justify-content: center;
`;

export const LinkedInIcon = styled.div`
  color: ${({ color }) => color};
  font-size: 4em;
  padding: 0 20px;
  grid-area: col1;

  // Keep color the same after clicking link
  .link {
    color: ${({ color }) => color};
  }

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const GithubIcon = styled.div`
  font-size: 4em;
  padding: 0 20px;
  grid-area: col2;

  // Keep color the same after clicking link
  .link {
    color: ${({ color }) => color};
  }

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const MediumIcon = styled.div`
  font-size: 4em;
  padding: 0 20px;
  grid-area: col3;

  // Keep color the same after clicking link
  .link {
    color: ${({ color }) => color};
  }

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ color }) => color};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ color }) => color};
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Body = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => color};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
