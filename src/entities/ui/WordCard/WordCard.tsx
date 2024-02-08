import { useState } from 'react';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import './wordcard.scss';
import TrashIcon from '../../logos/TrashIcon';
import { useAppDispatch } from '../../../features/redux/hooks';
import { removeWord } from '../../../features/dictionary/dictionarySlice';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

interface IProps {
  original: string;
  translated: string;
  id: string;
}
enum iconStatus {
  hidden = 'hidden',
  shown = 'show',
}
const WordCard = (props: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hidden, setHidden] = useState(iconStatus.hidden);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  const { original, translated, id } = props;
  const dispatch = useAppDispatch();

  const onDeleteHandler = (id: string) => {
    dispatch(removeWord(id));
  };
  const handle = () => {
    closeModal();
    setHidden(iconStatus.hidden);
    onDeleteHandler(id);
  };
  const handleHideIcon = () => {
    setHidden(iconStatus.hidden);
  };
  return (
    <tr
      className="wordcard"
      onMouseOver={(e) => {
        setHidden(iconStatus.shown);
      }}
      onMouseOut={() => {
        setHidden(iconStatus.hidden);
      }}
    >
      <td className="original">{original}</td>

      <td className="translated">
        {translated}
        <AddToFavorites ml={10} />
        <button
          className={hidden}
          onClick={() => {
            openModal();
          }}
        >
          <TrashIcon />
        </button>
      </td>
      {isVisible && (
        <Modal
          isVisible={isVisible}
          closeModal={closeModal}
          handle={handleHideIcon}
        >
          <Button handle={handle}>Удалить</Button>
        </Modal>
      )}
    </tr>
  );
};

export default WordCard;
