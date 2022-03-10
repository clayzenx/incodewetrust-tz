import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(Link)<{ active: boolean }>`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  color: black;

  border-bottom: ${({ active }) =>
    active ? "3px solid #ffa500" : "3px solid rgba(0,0,0,0)"};
`;
