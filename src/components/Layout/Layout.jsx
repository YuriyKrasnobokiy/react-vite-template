import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/modalSlice";
import { Modal } from "../Modal/Modal";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import {
  HeaderNav,
  HeaderWrapper,
  ModalBtn,
  NavLinkStyled,
  ThemeBtn,
} from "./Layout.styled";
import { selectIsOpenModal } from "../../redux/modal/modalSelectors";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);
  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
          </HeaderNav>
          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn>
          <ModalBtn onClick={() => dispatch(openModal())}>Modal</ModalBtn>
          {isOpenModal && <Modal />}
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
