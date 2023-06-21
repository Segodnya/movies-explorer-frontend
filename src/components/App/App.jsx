import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import "./App.css";

const App = () => {
  let isLogged;

  return (
    <div className="app">
      <div className="app__wrapper">
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route path="/movies" element={<Movies isLogged={isLogged} />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLogged={isLogged} />}
          />
          <Route path="/profile" element={<Profile isLogged={isLogged} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
