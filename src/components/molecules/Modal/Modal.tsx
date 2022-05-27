import {
  Wrapper,
  ModalWindow,
  Header,
  HeaderText,
  Content,
} from "./Modal.style";
import { Button } from "src/components/atoms/Button/Button";

const Modal = ({ headerText, showModal, setShowModal, children }) => {
  return (
    <>
      {showModal ? (
        <Wrapper>
          <ModalWindow>
            <Header>
              {headerText ? <HeaderText>{headerText}</HeaderText> : null}
              <Button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </Button>
            </Header>
            <Content>{children}</Content>
          </ModalWindow>
        </Wrapper>
      ) : null}
    </>
  );
};

export default Modal;
