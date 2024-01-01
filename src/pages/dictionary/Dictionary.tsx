import Input from '../../entities/ui/Input/Input';
import Loader from '../../entities/ui/Loader/Loader';
import WordCard from '../../entities/ui/WordCard/WordCard';
import { useAppSelector } from '../../features/redux/hooks';
import './dictionary.scss';

const Dictionary = () => {
  const data = useAppSelector((state) => state.dictionaryReducer.words);
  const loading = useAppSelector((state) => state.dictionaryReducer.loading);
  if (loading) {
    return <Loader className="loader" />;
  }
  return (
    <div className="dictionary">
      <Input />
      <h1>Словарь</h1>
      {data.map((word) => (
        <WordCard {...word} key={word.id} />
      ))}
    </div>
  );
};

export default Dictionary;
