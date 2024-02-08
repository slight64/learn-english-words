import { createPortal } from 'react-dom';
import './modal.scss';
import { useState } from 'react';
interface IProps {
  children: React.ReactNode;
  isVisible?: boolean;
  handle?: () => void;
  closeModal: () => void;
}

const Modal = ({ children, closeModal, handle }: IProps) => {
  const [isfadingOut, setIsFadingOut] = useState(false);

  const handleActions = () => {
    if (handle) {
      handle();
    }
  };
  const handleModalClick = () => {
    setIsFadingOut(!isfadingOut);
    handleActions();
    setTimeout(() => closeModal(), 200);
  };

  return createPortal(
    <div
      className={isfadingOut ? 'modal-window hide' : 'modal-window'}
      onClick={() => handleModalClick()}
    >
      <div
        className={isfadingOut ? 'modal-content hide' : 'modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
