import { MaterialUISwitch } from "../Switch/Switch";
import { HeaderNav, HeaderWrapper, NavLinkStyled } from "./Layout.styled";
// import PropTypes from "prop-types";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
          </HeaderNav>
          <MaterialUISwitch
            onClick={toggleTheme}
            checked={currentTheme === "dark"}
          />
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
