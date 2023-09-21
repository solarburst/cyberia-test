import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import File from '../File';
import { sendFeedback } from '../../api/projects';
import classNames from 'classnames';

type FormValues = {
    email: string;
    phone: string;
    message: string;
}

enum Status {
    SUCCESS = 'success',
    ERROR = 'error'
}

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const Form: React.FC = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const inputsData = watch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        [...e.target.files].forEach(file => {
            if (file.size > 104857600) setFileError("Размер файла не должен превышать 100 МБ");
        })
        setFiles([...e.target.files].filter(file => file.size < 104857600));
        const dataTransfer = new DataTransfer();
        e.target.files = dataTransfer.files;
    }
  };

  const handleOnClick = (index: number) => {
    if (files) {
        const clone = [...files]
        clone.splice(index, 1);
        setFiles(clone);
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    if (files) {
        files.forEach(file => formData.append(`attachment`, file));
    }
    if (data.email) {
        formData.append('email', data.email);
    }
    if (data.phone) {
        formData.append('phone', data.phone);
    }
    if (data.message) {
        formData.append('message', data.message);
    }
    try {
        await sendFeedback(formData);
        setStatus(Status.SUCCESS);
    } catch (err) {
        setStatus(Status.ERROR);
    }
  }

  const emailInputClass = classNames({
    "form__control-input": true,
    "active": inputsData.email,
    "error": errors.email?.type === "pattern" || (errors.email?.type === "required" && errors.phone?.type === "required"),
  })

  const phoneInputClass = classNames({
    "form__control-input": true,
    "active": inputsData.phone,
    "error": errors.phone?.type === "pattern" || (errors.phone?.type === "required" && errors.email?.type === "required"),
  })
  
  const messageInputClass = classNames({
    "form__message-textarea": true,
    "active": inputsData.message,
  })

  const statusClass = classNames({
    "form__status": true,
    "success": status === Status.SUCCESS,
    "error": status === Status.ERROR,
  })

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__control">
            <input
                type="email"
                id="email"
                className={emailInputClass}
                {...register("email", {
                    required: { value: inputsData.phone ? false : true, message: 'Email или телефон не могут быть пустыми' },
                    pattern: { value: emailRegex, message: 'Поле заполнено некорректно' }
                })}
            />
            <label htmlFor="email" className="form__control-label">Email</label>
            <label htmlFor="email" className="form__control-error">{errors.email?.message}</label>
        </div>
        <div className="form__control">
            <input
                type="tel"
                id="phone"
                className={phoneInputClass}
                {...register("phone", {
                    required: { value: inputsData.email ? false : true, message: 'Email или телефон не могут быть пустыми' },
                    pattern: { value: phoneRegex, message: 'Поле заполнено некорректно' }
                })}
            />
            <label htmlFor="phone" className="form__control-label">Телефон</label>
            <label htmlFor="phone" className="form__control-error">{errors.phone?.message}</label>
        </div>
        <div className="form__message">
            <textarea id="message" className={messageInputClass} {...register("message")}></textarea>
            <label htmlFor="message" className="form__control-label">Сообщение</label>
            <div className="form__message-files">
                {
                    files ?
                    files.map((file, index) => <File file={file} onClick={() => handleOnClick(index)} key={index} />)
                    : null
                }
            </div>
            <input type="file" id="attachment"  name="attachment" className="form__message-file" multiple onChange={handleFileChange} />
            <label htmlFor="attachment" className="form__message-label">
                <img src="src/assets/svg/paperclip.svg" alt="Paperclip" className="form__message-icon" />
            </label>
        </div>
        <span className="form__message-error">
            {fileError}
        </span>
        <div className="form__wrapper">
            <button className="form__button" type="submit">ОТПРАВИТЬ</button>
            <p className="form__agreement">Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
        </div>
        <div className={statusClass}>
            {
                status ?
                    status === Status.SUCCESS ? "Ваша заявка успешно отправлена" : "Не удалось отрпавить заявку, повторите отправку позднее"
                    : null
            }
        </div>
    </form>
  )
}

export default Form;
