import { useState } from 'react';
import { fetchTranslate } from '../../../features/dictionary/dictionarySlice';
import { useAppDispatch } from '../../../features/redux/hooks';
import './input.scss';

const Input = () => {
  const [state, setState] = useState('');
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (state === '') {
      return;
    }
    dispatch(fetchTranslate(state));
  };
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let words = event.target.value.replace(/[А-я0-9]/g, '');
    setState(words);
  };
  return (
    <div className="input-box">
      <input
        placeholder="Добавить слово"
        className="input"
        type="text"
        value={state}
        onChange={inputHandler}
      />
      <button className="button" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default Input;
