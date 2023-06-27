import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Создайте стейт currentUser в корневом компоненте
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  // Проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // Регистрация пользователя
  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  // Авторизация пользователя
  const handleAuthorize = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Выход
  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate("/signin");
  };

  return (
    // используйте провайдер объекта контекста:
    // «оберните» в него всё текущее содержимое корневого компонента.
    // В качестве значения контекста для провайдера используйте currentUser
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main isLogged={isLoggedIn} />} />
          <Route path="/movies" element={<Movies isLogged={isLoggedIn} />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLogged={isLoggedIn} />}
          />
          <Route path="/profile" element={<Profile isLogged={isLoggedIn} />} />
          <Route
            path="/signin"
            element={<Login onAuthorize={handleAuthorize} />}
          />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
