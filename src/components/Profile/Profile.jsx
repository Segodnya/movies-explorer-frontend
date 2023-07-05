import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

const Profile = ({ onSignOut, onUpdateUser, isLoggedIn, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();
  const [isCurrentValues, setIsCurrentValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
    });
  };

  useEffect(() => {
    if (currentUser.name === values.name) {
      setIsCurrentValues(true);
    } else {
      setIsCurrentValues(false);
    }
  }, [values]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="profile__form">
            <div className="profile__row">
              <p className="profile__text">Имя</p>
              <input name="name" className="profile__input profile__text" id="name-input" type="text" minLength="2" maxLength="30" required onChange={handleChange} value={values.name || ''} />
            </div>
            <span className="auth__error">{errors.name}</span>
            <div className="profile__row">
              <p className="profile__text">E-mail</p>
              <p className="profile__text">{currentUser.email}</p>
            </div>
          </div>
          <div className="profile__buttons">
            <button
              type="submit"
              disabled={!isFormValid || isLoading ? true : false}
              className={!isFormValid || isLoading || isCurrentValues ? 'profile__button profile__button_disabled' : 'profile__button profile__button_color_white'}
            >
              Редактировать
            </button>
            <button type="button" className="profile__button profile__button_color_red" onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
