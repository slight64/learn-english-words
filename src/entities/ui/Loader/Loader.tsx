type Props = {
  className: string;
  sm?: boolean;
};
import './loader.scss';

const Loader = ({ className, sm = false }: Props) => {
  const checkStyles = () => {
    let styles: React.CSSProperties = {};
    if (sm)
      styles = {
        width: '50px',
        height: '50px',
        fontSize: '0.7em',
      };
    return styles;
  };
  return (
    <div className={`spinner ${className}`} style={checkStyles()}>
      Загрузка
      <div className="spinner-sector spinner-sector-color"></div>
      <div className="spinner-sector spinner-sector-color2"></div>
    </div>
  );
};

export default Loader;
