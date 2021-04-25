import React from "react";

import notFoundImg from "../../assets/images/page_not_found.svg";
import { Img, ImgWrap } from "./Page404Elements";

export const Page404 = () => {
  return (
    <>
      <ImgWrap>
        <Img src={notFoundImg} />
      </ImgWrap>
    </>
  );
};
