import { HeaderWrapper, NavLinkStyled } from "./Layout.styled";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
