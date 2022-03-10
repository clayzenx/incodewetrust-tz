import styled from "styled-components";

interface IFlex {
  direction?: "row" | "column";
  gap?: number;
  align?: string;
  justify?: string;
  wrap?: "wrap" | "no-wrap";
}

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || "no-wrap"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap + "px"};
`;
