import {
  Wrapper,
  ModalWindow,
  Header,
  HeaderText,
  Content,
} from "./Modal.style";
import { Button } from "src/components/atoms/Button/Button";
import { Dispatch, ReactNode } from "react";

type Props = {
  headerText: string;
  showModal: boolean;
  setShowModal: Dispatch<boolean>;
  children: ReactNode;
};

const Modal = ({ headerText, showModal, setShowModal, children }: Props) => {
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
