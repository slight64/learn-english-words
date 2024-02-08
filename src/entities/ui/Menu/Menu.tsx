import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLogo from '../../logos/ArrowLogo';
import DictionaryLogo from '../../logos/DictionaryLogo';
import './menu.scss';

const Menu = () => {
  const [sideBarHidden, setSideBarHidden] = useState(false);

  const hideBar = () => {
    setSideBarHidden(!sideBarHidden);
  };

  return (
    <div className={`menu ${sideBarHidden ? 'close' : 'open'}`}>
      <div className="titile-wrapper">
        <h1 className="title">{sideBarHidden ? 'HD' : 'Happy Dictionary'}</h1>
        <button className="button" onClick={hideBar}>
          <ArrowLogo className={'arrow-back'} />
        </button>
      </div>
      <div className="menu-block">
        {sideBarHidden ? null : (
          <span className="item__title">Базовые инструменты</span>
        )}
        <div className="item">
          <Link className="item-link" to="dictionary">
            <DictionaryLogo className={'item__logo'} />
            {sideBarHidden ? null : 'Словарь'}
          </Link>
        </div>
        <div className="item">
          <Link className="item-link" to="quiz">
            <DictionaryLogo className={'item__logo'} />
            {sideBarHidden ? null : 'Квиз'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
