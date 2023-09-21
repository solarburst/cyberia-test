import React from 'react';
import { ReactComponent as BigLogo } from '../../assets/svg/big-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer__content container">
            <div className="footer__logo">
                <BigLogo className="footer__logo-icon" />
                <span>Web and machine learning <br /> developing company</span>
            </div>
            <div className="footer__contacts">
                <ul className="footer__contacts-list">
                    <li>+7 499 679 45 79</li>
                    <li>hello@cyberia.ru</li>
                    <li>Аносова 3Б, оф. 1</li>
                </ul>
                <ul className="footer__links">
                    <li>
                        <a className="link" href="#">Главная</a>
                    </li>
                    <li>
                        <a className="link" href="#">Услуги</a>
                    </li>
                    <li>
                        <a className="link" href="#">Проекты</a>
                    </li>
                </ul>
                <ul className="footer__links">
                    <li>
                        <a className="link" href="#">Блог</a>
                    </li>
                    <li>
                        <a className="link" href="#">О нас</a>
                    </li>
                    <li>
                        <a className="link" href="#">Команда</a>
                    </li>
                </ul>
            </div>
            <div className="footer__copyright">
                <ul className="footer__links">
                    <li>
                        <span>2022, digital-агентство Cyberia</span>
                    </li>
                    <li>
                        <a className="link" href="#">Положение о защите персональных данных</a>
                    </li>
                    <li>
                        <a className="link" href="#">Политика в отношении обработки <br /> и защиты персональных данных</a>
                    </li>
                    <li>
                        <a className="link" href="#">Оферта оказания услуг</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
