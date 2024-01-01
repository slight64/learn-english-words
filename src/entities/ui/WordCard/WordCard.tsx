import './wordcard.scss';

type Props = {
  original: string;
  translated: string;
};

const WordCard = (props: Props) => {
  const { original, translated } = props;
  return (
    <div className="wordcard">
      <div className="original">{original}</div>
      <div className="translated">{translated}</div>
    </div>
  );
};

export default WordCard;
