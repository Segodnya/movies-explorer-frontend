import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h2 className="auth__title">Рады видеть!</h2>
        <form name="login" className="auth__form" id="login-form" noValidate onSubmit={handleSubmit}>
          <label className="auth__label" htmlFor="login-email">
            E-mail
          </label>
          <input name="login-email" className="auth__input" id="login-email-input" type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} autoComplete="off" />
          <label className="auth__label" htmlFor="login-password">
            Пароль
          </label>
          <input name="login-password" className="auth__input" id="login-password-input" type="password" placeholder="Пароль" value={password} onChange={handleChangePassword} autoComplete="off" />
          <button type="submit" className="auth__button-save" id="auth-button-save-login">
            Войти
          </button>
        </form>
        <p className="auth__tip">
          Ещё не зарегистрированы?
          <Link to="/signup" className="link auth__link">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
