import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { patchUserInfo } from "../../utils/api/mainApi";

const Profile = ({ onSignOut, onUpdateUser, isLoggedIn, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(currentUser.name);

  useEffect(() => {
    setNewName(newName);
  }, [newName]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <div className="profile__form">
          <div className="profile__row">
            <p className="profile__text">Имя</p>
            {isEditing ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <p className="profile__text">{currentUser.name}</p>
            )}
          </div>
          <div className="profile__row">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">{currentUser.email}</p>
          </div>
        </div>
        <div className="profile__buttons">
          {isEditing ? (
            <button
              className="profile__button profile__button_color_white"
              type="button"
              onClick={() => {
                patchUserInfo({
                  name: newName,
                });
                setIsEditing(false);
              }}
            >
              Сохранить
            </button>
          ) : (
            <button
              className="profile__button profile__button_color_white"
              type="button"
              onClick={() => setIsEditing(true)}
            >
              Редактировать
            </button>
          )}
          <button
            className="profile__button profile__button_color_red"
            type="button"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;
