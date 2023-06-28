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
import * as api from "../../utils/api/main";
import ProtectedRouteElement from "../../utils/ProtectedRouteElement";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Создайте стейт currentUser в корневом компоненте
  const [currentUser, setCurrentUser] = useState({
    name: null,
    email: null,
    isLoggedIn: !!localStorage.getItem("userId"),
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          console.log(res);
          if (res) {
            setIsLoggedIn(true);
            localStorage.setItem("userId", res._id);
            setCurrentUser((oldState) => ({
              name: res.name,
              email: res.email,
              isLoggedIn: true,
            }));
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  // Регистрация пользователя
  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then((res) => {
        if (res) {
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Авторизация пользователя
  const handleAuthorize = (email, password) => {
    api
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route
              path="/signup"
              element={<Register onRegister={handleRegister} />}
            />
            <Route
              path="/signin"
              element={<Login onAuthorize={handleAuthorize} />}
            />

            <Route
              path="/"
              element={
                <ProtectedRouteElement
                  isLoggedIn={isLoggedIn}
                  component={Main}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  isLoggedIn={isLoggedIn}
                  component={Movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  isLoggedIn={isLoggedIn}
                  component={SavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  isLoggedIn={isLoggedIn}
                  component={Profile}
                  setCurrentUser={setCurrentUser}
                  navigate={navigate}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
