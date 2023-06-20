import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo.svg";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const { values, errors, handleChange, isFormValid } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <img className="auth__logo" src={logo} alt="site logo" />
        <h2 className="auth__title">Рады видеть!</h2>
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
    </div>
  );
};

export default Login;
