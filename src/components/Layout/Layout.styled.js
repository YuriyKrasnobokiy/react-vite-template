import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 1200px;
  padding: 20px 40px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondTextColor};
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  display: inline-flex;
  transition: color 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }

  &.active {
    color: ${(props) => props.theme.colors.secondAccentColor};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ModalBtn = styled.button`
  font-size: 24px;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textColor};
  margin: 0;
  padding: 10px;
`;
export const ThemeBtn = styled.button`
  font-size: 24px;
  width: 40px;
  height: 40px;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textColor};
  margin: 0;
`;
