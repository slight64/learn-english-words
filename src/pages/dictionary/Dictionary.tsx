import Input from '../../entities/ui/Input/Input';
import Loader from '../../entities/ui/Loader/Loader';
import WordCard from '../../entities/ui/WordCard/WordCard';
import { useAppSelector } from '../../features/redux/hooks';
import './dictionary.scss';

const Dictionary = () => {
  const data = useAppSelector((state) => state.dictionary.words);

  return (
    <div className="dictionary">
      <Input />
      <h1>Словарь</h1>
      {data &&
        data.map((word) => {
          if (word.loading) {
            return <Loader className="loader" key={word.id} sm={true} />;
          }

          return <WordCard {...word} key={word.id} />;
        })}
    </div>
  );
};

export default Dictionary;
