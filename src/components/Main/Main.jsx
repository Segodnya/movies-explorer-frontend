import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
};

export default Main;
