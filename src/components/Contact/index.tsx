import React from 'react';
import { ReactComponent as Mailbox } from '../../assets/svg/mailbox.svg';
import Form from '../Form';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact__wrapper container">
        <div className="contact__info">
          <Mailbox />
          <h3 className="contact__info-title">Расскажите <br /> о вашем проекте</h3>
          <p className="contact__info-text">Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</p>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact;
