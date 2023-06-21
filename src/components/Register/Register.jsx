import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo.svg";
import "../../blocks/auth/auth.css";
import "./Register.css";

const Register = () => {
  const { values, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="site logo" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form
          name="register"
          className="auth__form"
          id="register-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <label className="auth__label" htmlFor="name">
            Имя
          </label>
          <input
            name="name"
            className={`auth__input ${
              errors.name ? "auth__input_errored" : ""
            }`}
            id="name-input"
            type="text"
            placeholder="Имя"
            value={values.name || ""}
            onChange={handleChange}
            autoComplete="off"
            required
            minLength="2"
            maxLength="30"
          />
          {errors.name && <span className="auth__error">{errors.name}</span>}

          <label className="auth__label" htmlFor="email">
            E-mail
          </label>
          <input
            name="email"
            className={`auth__input ${
              errors.email ? "auth__input_errored" : ""
            }`}
            id="email-input"
            type="email"
            placeholder="E-mail"
            value={values.email || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.email && <span className="auth__error">{errors.email}</span>}

          <label className="auth__label" htmlFor="password">
            Пароль
          </label>
          <input
            name="password"
            className={`auth__input ${
              errors.password ? "auth__input_errored" : ""
            }`}
            id="password-input"
            type="password"
            placeholder="Пароль"
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          {errors.password && (
            <span className="auth__error">{errors.password}</span>
          )}

          <button
            type="submit"
            className="auth__button-save"
            id="auth-button-save"
            disabled={!isFormValid}
          >
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
