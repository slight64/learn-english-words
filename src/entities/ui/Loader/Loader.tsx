type Props = {
  className: string;
};
import './loader.scss';

const Loader = ({ className }: Props) => {
  return (
    <div className={`spinner ${className}`}>
      Загрузка
      <div className="spinner-sector spinner-sector-color"></div>
      <div className="spinner-sector spinner-sector-color2"></div>
    </div>
  );
};

export default Loader;
