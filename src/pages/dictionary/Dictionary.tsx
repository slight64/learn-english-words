import { useState } from 'react';
import Button from '../../entities/ui/Button/Button';
import Input from '../../entities/ui/Input/Input';
import Loader from '../../entities/ui/Loader/Loader';
import Modal from '../../entities/ui/Modal/Modal';
import WordCard from '../../entities/ui/WordCard/WordCard';
import Pagination from '../../entities/ui/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { sortWordsByAlphabet } from '../../features/dictionary/dictionarySlice';
import './dictionary.scss';

const Dictionary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const data = useAppSelector((state) => state.dictionary.words);
  const pageCount = Math.ceil(data.length / limit);
  const dispatch = useAppDispatch();
  const paginationList = (page: number, limit: number) => {
    const newData = [];
    for (let i = (page - 1) * limit; i < limit * page; i++) {
      if (data[i] === undefined) {
        break;
      }
      if (data[i]) {
        newData.push(data[i]);
      }
    }
    return newData;
  };
  const handlePage = (num: number) => {
    setPage(num);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <div className="dictionary">
      <Button openModal={openModal}>Добавить новое слово</Button>
      <h1 className="dictionary-title">Словарь</h1>
      <div>
        <button onClick={() => dispatch(sortWordsByAlphabet('alphabet'))}>
          Сортировка
        </button>
      </div>
      <table className="dictionary-table">
        <thead>
          <tr>
            <th>Оригинальное слово</th>
            <th>Перевод</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            paginationList(page, limit).map((word) => {
              if (word.loading) {
                return <Loader className="loader" key={word.id} sm={true} />;
              }

              return <WordCard {...word} key={word.id} />;
            })}
        </tbody>
      </table>
      <Pagination pageCount={pageCount} handlePage={handlePage} />
      {isVisible && (
        <Modal isVisible={isVisible} closeModal={closeModal}>
          <Input closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Dictionary;
