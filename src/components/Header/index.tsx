import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import classNames from 'classnames';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const scrollDirection = useScrollDirection();

  const handleOnClick = () => {
    setToggle(!toggle);
  }

  const headerClass = classNames({
    header: true,
    'header--open': toggle,
    'header--up': scrollDirection === "up",
    'header--down': scrollDirection === "down",
  })

  return (
    <header className={headerClass}>
        <div className="container header__wrapper">
            <Logo className="header__logo" />
            <Close className="header__close" onClick={handleOnClick} />
            <nav className="header__menu">
                <ul>
                    <li className="header__menu-item header__menu-item--hidden"><a className="link" href="#">Главная</a></li>
                    <li className="header__menu-item"><a className="link" href="#">О нас</a></li>
                    <li className="header__menu-item"><a className="link" href="#">Услуги</a></li>
                    <li className="header__menu-item"><a className="link" href="#">Проекты</a></li>
                    <li className="header__menu-item"><a className="link" href="#">Блог</a></li>
                    <li className="header__menu-item"><a className="link" href="#">Контакты</a></li>
                </ul>
            </nav>
            <hr className="header__separator" />
            <div className="header__contacts">
                <p className="header__contacts-title">Контакты:</p>
                <ul className="header__contacts-list">
                    <li className="header__contacts-list-item">+7 499 679 45 79</li>
                    <li className="header__contacts-list-item">hello@cyberia.ru</li>
                    <li className="header__contacts-list-item">Аносова 3Б, оф. 1</li>
                </ul>
            </div>
            <Burger className="header__burger" onClick={handleOnClick} />
        </div>
    </header>
  )
}

export default Header