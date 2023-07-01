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
import * as api from "../../utils/api/mainApi";
import ProtectedRouteElement from "../../utils/ProtectedRouteElement";
import { getMovies } from "../../utils/api/moviesApi";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            localStorage.removeItem("allMovies");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([profileInfo, moviesData]) => {
          setCurrentUser(profileInfo);
          setSavedMovies(moviesData.filter((x) => x.owner === currentUser.id));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then(() => {
        handleAuthorize(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAuthorize = (email, password) => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .patchUserInfo(newUserInfo)
      .then((data) => {
        setIsUpdated(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    navigate("/");
  };

  function handleLike(movie) {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleDislike(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/signin"
            element={
              <Login onAuthorize={handleAuthorize} isLoading={isLoading} />
            }
          />
          <Route
            path="/signup"
            element={
              <Register onRegister={handleRegister} isLoading={isLoading} />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

{
  /*

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
                  movies={movies}
                  savedMovies={savedMovies}
                  toggleState={toggleState}
                  changeToggleState={changeToggleState}
                  handleSearch={handleSearch}
                  query={query}
                  setQuery={setQuery}
                  filterMovies={filterMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  isLoggedIn={isLoggedIn}
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  toggleState={toggleState}
                  changeToggleState={changeToggleState}
                  handleSearch={handleSearch}
                  query={query}
                  setQuery={setQuery}
                  filterMovies={filterMovies}
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
          </Routes> */
}

export default App;
