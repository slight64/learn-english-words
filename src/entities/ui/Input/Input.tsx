import { useEffect, useRef, useState } from 'react';
import { fetchTranslate } from '../../../features/dictionary/dictionarySlice';
import { useAppDispatch } from '../../../features/redux/hooks';
import './input.scss';
import Button from '../Button/Button';

interface IProps {
  closeModal: () => void;
}

const Input = ({ closeModal }: IProps) => {
  const [state, setState] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (state === '') {
    }
    dispatch(fetchTranslate(state));
  };
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let words = event.target.value.replace(/[А-я0-9]/g, '');
    setState(words);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div className="input-box">
      <input
        ref={inputRef}
        placeholder="Добавить слово"
        className="input"
        type="text"
        value={state}
        onChange={inputHandler}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleClick();
            closeModal();
          }
        }}
      />
      <Button handleClick={handleClick} closeModal={closeModal}>
        Добавить слово
      </Button>
    </div>
  );
};

export default Input;
