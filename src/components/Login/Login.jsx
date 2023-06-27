import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo.svg";
import "./Login.css";

const Login = ({ onAuthorize }) => {
  const { values, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthorize(values["login-email"], values["login-password"]);
  };

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to="/" className="logo logo_auth">
          <img src={logo} alt="логотип сайта" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <form
          name="login"
          className="auth__form"
          id="login-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <label className="auth__label" htmlFor="login-email">
            E-mail
          </label>
          <input
            name="login-email"
            className={`auth__input ${
              errors["login-email"] ? "auth__input_errored" : ""
            }`}
            id="login-email-input"
            type="email"
            placeholder="E-mail"
            value={values["login-email"] || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors["login-email"] && (
            <span className="auth__error">{errors["login-email"]}</span>
          )}

          <label className="auth__label" htmlFor="login-password">
            Пароль
          </label>
          <input
            name="login-password"
            className={`auth__input ${
              errors["login-password"] ? "auth__input_errored" : ""
            }`}
            id="login-password-input"
            type="password"
            placeholder="Пароль"
            value={values["login-password"] || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors["login-password"] && (
            <span className="auth__error">{errors["login-password"]}</span>
          )}

          <button
            type="submit"
            className="auth__button-save"
            id="auth-button-save-login"
            disabled={!isFormValid}
          >
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
    </main>
  );
};

export default Login;
