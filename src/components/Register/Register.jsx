import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../../blocks/auth/auth.css';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <img className="auth__logo" src={logo} alt="site logo" />
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form name="register" className="auth__form" id="register-form" noValidate onSubmit={handleSubmit}>
          <label className="auth__label" htmlFor="name">
            Имя
          </label>
          <input name="name" className="auth__input" id="name-input" type="text" placeholder="Имя" value={name} onChange={handleChangeName} autoComplete="off" required minLength="2" maxLength="30" />
          <label className="auth__label" htmlFor="email">
            E-mail
          </label>
          <input name="email" className="auth__input" id="email-input" type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} autoComplete="off" required />
          <label className="auth__label" htmlFor="password">
            Пароль
          </label>
          <input name="password" className="auth__input" id="password-input" type="password" placeholder="Пароль" value={password} onChange={handleChangePassword} autoComplete="off" required />
          <button type="submit" className="auth__button-save" id="auth-button-save">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__tip">
          Уже зарегистрированы?
          <Link to="/signin" className="link auth__link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
