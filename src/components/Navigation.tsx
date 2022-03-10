import React from "react";
import { Flex } from "./styles/Flex.styled";
import { NavItem } from "./styles/NavItem.styled";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Flex>
      <NavItem to="/" active={pathname === "/"}>
        Home
      </NavItem>
      <NavItem to="/fav-jokes" active={pathname === "/fav-jokes"}>
        Favorite
      </NavItem>
    </Flex>
  );
};
