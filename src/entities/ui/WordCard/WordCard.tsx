import { useState } from 'react';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import './wordcard.scss';
import TrashIcon from '../../logos/TrashIcon';
import { useAppDispatch } from '../../../features/redux/hooks';
import { removeWord } from '../../../features/dictionary/dictionarySlice';

interface IProps {
  original: string;
  translated: string;
  id: string;
}

const WordCard = (props: IProps) => {
  const [hidden, setHidden] = useState('hidden');
  const { original, translated, id } = props;
  const dispatch = useAppDispatch();
  const onDeleteHandler = (id: string) => {
    dispatch(removeWord(id));
  };
  return (
    <div
      className="wordcard"
      onMouseOver={() => {
        setHidden('show');
      }}
      onMouseOut={() => {
        setHidden('hidden');
      }}
    >
      <div className="original">{original}</div>

      <div className="translated">
        {translated}
        <AddToFavorites ml={10} />
        <button
          className={hidden}
          onClick={() => {
            onDeleteHandler(id);
          }}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default WordCard;
