import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { Tooltip } from '../Tooltip/Tooltip';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as api from '../../utils/api/mainApi';
import ProtectedRouteElement from '../../utils/ProtectedRouteElement';
import AuthorizedRouteElement from '../../utils/AuthorizedRouteElement';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  async function checkLoggedInStatus() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoading(true);
      try {
        const res = await api.getUserInfo();
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          localStorage.removeItem('allMovies');
          navigate(path);
        }
      } catch (err) {
        setIsSuccess(false);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([profileInfo, moviesData]) => {
          setCurrentUser(profileInfo);
          setSavedMovies(moviesData.filter((x) => x.owner === currentUser._id).reverse());
        })
        .catch((err) => {
          setIsSuccess(false);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then(() => {
        handleAuthorize(email, password);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      });
  };

  const handleAuthorize = (email, password) => {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setIsSuccess(false);
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
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUnauthorized(err) {
    if (err === 'Error: 401') {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('query');
    localStorage.removeItem('shorts');
    localStorage.removeItem('allMovies');
    navigate('/');
  };

  function handleLike(movie) {
    api
      .saveMovie({
        movieData: {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
          movieId: movie.id,
        },
      })
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleDislike(movie) {
    console.log(movie);
    api
      .deleteMovie({ id: movie._id })
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function closeTooltip() {
    setIsSuccess(true);
    setIsUpdated(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signin" element={<AuthorizedRouteElement component={Login} isLoggedIn={isLoggedIn} onAuthorize={handleAuthorize} isLoading={isLoading} />} />
          <Route path="/signup" element={<AuthorizedRouteElement component={Register} isLoggedIn={isLoggedIn} onRegister={handleRegister} isLoading={isLoading} />} />
          <Route path="/movies" element={<ProtectedRouteElement component={Movies} isLoggedIn={isLoggedIn} savedMovies={savedMovies} onDislike={handleDislike} onLike={handleLike} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement component={SavedMovies} isLoggedIn={isLoggedIn} savedMovies={savedMovies} onDislike={handleDislike} />} />
          <Route path="/profile" element={<ProtectedRouteElement component={Profile} onSignOut={handleSignOut} onUpdateUser={handleUpdateUser} isLoggedIn={isLoggedIn} isLoading={isLoading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Tooltip isSuccess={isSuccess} onClose={closeTooltip} />
        <Tooltip isSuccess={!isUpdated} isUpdated={isUpdated} onClose={closeTooltip} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
