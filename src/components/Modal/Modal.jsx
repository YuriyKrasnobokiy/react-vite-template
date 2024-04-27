import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseBtn, ModalOverlay, ModalStyled } from "./Modal.styled";
import { closeModal } from "../../redux/modal/modalSlice";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [dispatch]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeModal());
    }
  };

  const handleCloseClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalStyled>
        <CloseBtn onClick={handleCloseClick} type="button">
          &times;
        </CloseBtn>
        {children}
      </ModalStyled>
    </ModalOverlay>
  );
};
