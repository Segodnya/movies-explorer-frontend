import React, { useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({ setCurrentUser, navigate }) => {
  const { name, email, isLoggedIn } = useContext(CurrentUserContext);

  // Выход
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    setCurrentUser({
      name: null,
      email: null,
      isLoggedIn: false,
    });
    navigate("/signin");
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {name}!</h1>
        <div className="profile__form">
          <div className="profile__row">
            <p className="profile__text">Имя</p>
            <p className="profile__text">{name}</p>
          </div>
          <div className="profile__row">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">{email}</p>
          </div>
        </div>
        <div className="profile__buttons">
          <button
            className="profile__button profile__button_color_white"
            type="button"
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button_color_red"
            type="button"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;
