import { ReactNode } from 'react';
import './button.scss';
interface IProps {
  openModal?: () => void;
  closeModal?: () => void;
  handleClick?: (id?: string) => void;
  handle?: () => void;
  children: ReactNode;
}

const Button = ({
  openModal,
  closeModal,
  handleClick,
  handle,
  children,
}: IProps) => {
  const doThings = () => {
    if (openModal) {
      console.log('🚀 ~ doThings ~ openModal:', openModal);
      openModal();
    }
    if (closeModal) closeModal();

    if (handleClick) handleClick();
    if (handle) handle();
  };
  return (
    <button onClick={doThings} className="button-basic">
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
