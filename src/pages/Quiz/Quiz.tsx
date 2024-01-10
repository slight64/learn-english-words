import QuizCardsList from '../../entities/ui/QuizCard/QuizCardsList';
import { useAppSelector } from '../../features/redux/hooks';
import './quiz.scss';

const Quiz = () => {
  const words = useAppSelector((state) => state.dictionary.words);
  return (
    <div className="quiz">
      <div className="quiz-card">
        <h1 className="quiz-title">Quiz</h1>

        <p className="quiz-card-description">
          тут можно проверить насколько правильно вы запомнили слова
        </p>
        <QuizCardsList wordsArray={words} />
      </div>
    </div>
  );
};

export default Quiz;
