import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

const Profile = ({ isLogged }) => {
  isLogged = true;

  return (
    <>
      <Header isLogged={isLogged} />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__form">
          <div className="profile__row">
            <p className="profile__text">Имя</p>
            <p className="profile__text">Виталий</p>
          </div>
          <div className="profile__row">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile__buttons">
          <button className="profile__button profile__button_color_white">
            Редактировать
          </button>
          <button className="profile__button profile__button_color_red">
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
