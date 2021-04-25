import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggleOpen }) => {
  const { colorCodes } = useContext(ThemeContext);

  return (
    <SidebarContainer
      bgcolor={colorCodes.bgCode}
      isOpen={isOpen}
      onClick={toggleOpen}>
      <Icon>
        <CloseIcon color={colorCodes.navTextCode} />
      </Icon>
      <SidebarWrapper color={colorCodes.bgCode}>
        <SidebarMenu>
          <SidebarLink
            bgcolor={colorCodes.bgCode}
            color={colorCodes.navTextCode}
            hovercolor={colorCodes.heroInfoBodyCode}
            to="about"
            onClick={toggleOpen}>
            About
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
