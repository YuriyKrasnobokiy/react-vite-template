import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.ModalBgColor};
  &:hover {
    cursor: pointer;
  }
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  max-width: 438px;
  background: white;
  border-radius: 10px;
  cursor: auto;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  background-color: transparent;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;
