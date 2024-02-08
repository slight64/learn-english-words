import { createPortal } from 'react-dom';
import './customalers.scss';

const CustomAlert = () => {
  return createPortal(
    <div className="customalers">Ошибка!</div>,
    document.body
  );
};

export default CustomAlert;
