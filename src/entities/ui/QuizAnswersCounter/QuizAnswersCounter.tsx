import { useAppSelector } from '../../../features/redux/hooks';

const QuizAnswersCounter = () => {
  let count = useAppSelector((state) => state.quiz.correctAnswers);
  let left = useAppSelector((state) => state.quiz.total);
  return (
    <div>
      <div className="correct-answers">Правильных ответов {count}</div>
      <div className="left-words">Осталось вопросов {left}</div>
    </div>
  );
};

export default QuizAnswersCounter;
