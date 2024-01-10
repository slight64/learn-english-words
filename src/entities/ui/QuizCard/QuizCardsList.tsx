import './quizcardslist.scss';
import { Word } from '../../../features/dictionary/dictionarySlice';
import { generateRandomNums } from '../../../features/utils/randomAlgorithm';
import QuizAnswersCounter from '../QuizAnswersCounter/QuizAnswersCounter';
import { useAppDispatch } from '../../../features/redux/hooks';
import {
  calculateQuizCards,
  correctAnswer,
} from '../../../features/dictionary/quizSlice';
import { useEffect, useState } from 'react';

type Props = {
  wordsArray: Word[];
};

const data = [
  'Слово',
  'Сила',
  'Бронь',
  'Картошка',
  'Работа',
  'Блокнот',
  'Выходной',
];

const rollRandom = (num: number): number => {
  return Math.floor(Math.random() * num);
};

const QuizCardsList = (props: Props) => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const correctAnswerHandler = () => {
    dispatch(correctAnswer());
  };
  if (!props.wordsArray) {
    return <>Нет слов</>;
  }
  //Создание массива из случайных слов
  const quizArray = props.wordsArray.map((word) => {
    const clearedData = data.filter((item) => item !== word.translated);
    const arr = generateRandomNums(0, 4, 4).map((el) => {
      return clearedData[el];
    });

    let random = rollRandom(3);
    arr[random] = word.translated;

    // const filtered: string[] = arr.map((el) => {
    //   // Сделать нормальный алгоритм подбора случайных слов, сейчас эти блоки не работают.  функция выше просто заполняет массив случайными числами без фильтрации на похожие слова.

    //   return el;
    // });

    return {
      correct: word.translated,
      question: word.original,
      array: arr,
    };
  });
  //отправляем количество карточек в стейт
  useEffect(() => {
    dispatch(calculateQuizCards(quizArray.length || 0));
  }, [quizArray]);
  //Создание кнопок с ответами передаными из массива
  const cardVariants = (card: string[], correct: string) => {
    return card.map((el) => (
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setStep(step + 1);
          if (el === correct) {
            correctAnswerHandler();
          }
        }}
        className="quiz-card-variant"
        key={el}
      >
        {el}
      </button>
    ));
  };

  //Создание карточек с вариантами из массива случайных слов
  // const createCards = quizArray.map((card) => (
  //   <div className="quiz-card-box" key={Math.random()}>
  //     <p className="quiz-text">
  //       Как переводится слово <span>{card.question}</span>?{' '}
  //     </p>
  //     <div className={`quiz-card-variants`}>
  //       {cardVariants(card.array, card.correct)}
  //     </div>
  //   </div>
  // ));

  //Создание карточек по шагам используя useState
  const cardsBySpep = () => {
    if (step === quizArray.length) {
      //Заменить заглушку на прохождение квиза, подсчет итогов и кнопка, чтобы начать заново
      return <div>Вы прошли квиз</div>;
    }
    return (
      <div className="quiz-card-box" key={Math.random()}>
        <p className="quiz-text">
          Как переводится слово <span>{quizArray[step].question}</span>?{' '}
        </p>
        <div className={`quiz-card-variants`}>
          {cardVariants(quizArray[step].array, quizArray[step].correct)}
        </div>
      </div>
    );
  };

  return (
    <div className="quizcardslist">
      <QuizAnswersCounter />
      {cardsBySpep()}
    </div>
  );
};

export default QuizCardsList;
