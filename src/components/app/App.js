import React from 'react';
import s from './app.module.scss';
import Header from '../header/header';
import VisitingCard from '../visitingCard/visitingCard';
import Footer from '../footer/footer';
import AboutMe from '../aboutMe/aboutMe';
import Experience from "../experience/experience";

const App = () => {
  return (
    <div className={s.app}>
      <Header id={'header'} />
      <VisitingCard />
      <AboutMe/>
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
