import { Link } from 'react-router-dom';
import ArrowLogo from '../../logos/ArrowLogo';
import './menu.scss';
import DictionaryLogo from '../../logos/DictionaryLogo';

const Menu = () => {
  return (
    <div className="menu">
      <div className="titile-wrapper">
        <h1 className="title">Happy dictionary</h1>
        <button className="button">
          <ArrowLogo className={'arrow-back'} />
        </button>
      </div>
      <div className="menu-block">
        <span className="item__title">Базовые инструменты</span>
        <div className="item">
          <Link className="item-link" to="dictionary">
            <DictionaryLogo className={'item__logo'} />
            Словарь
          </Link>
        </div>
        <div className="item">
          <Link className="item-link" to="quiz">
            <DictionaryLogo className={'item__logo'} />
            Квиз
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
