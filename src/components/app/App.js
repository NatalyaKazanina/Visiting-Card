import React, { useState } from 'react';
import s from './app.module.scss';
import Header from '../header/header';
import VisitingCard from '../visitingCard/visitingCard';
import Footer from '../footer/footer';
import AboutMe from '../aboutMe/aboutMe';
import Experience from '../experience/experience';

const App = () => {

    const scrollToHeader = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const scroll = (height) => {
        window.scrollTo({
            top: height,
            behavior: 'smooth'
        })
    };

    const handleClick = (label) => {
        if (label === 'обо мне') {
            scroll(elementAboutMe)
        }
        if (label === 'опыт работы') {
            scroll(elementExperience)
        }
        if (label === 'образование') {
            scroll(elementEducation)
        }
        if (label === 'навыки') {
            scroll(elementAdditionalEducation)
        }
        if (label === 'контакты') {
            scroll(elementContacts)
        }
    };

    const [elementAboutMe, scrollToAboutMe] = useState(0);
    const [elementExperience, scrollToExperience] = useState(0);
    const [elementEducation, scrollToEducation] = useState(0);
    const [elementAdditionalEducation, scrollToAdditionalEducation] = useState(0);
    const [elementContacts, scrollToContacts] = useState(0);

  return (
    <div className={s.app}>
      <Header scrollToHeader={scrollToHeader}
              handleClick = {handleClick}
              elementAboutMe={elementAboutMe}
              elementExperience={elementExperience}
      />
      <VisitingCard />
      <AboutMe scrollToAboutMe={scrollToAboutMe} />
      <Experience
          scrollToExperience={scrollToExperience}
          scrollToEducation={scrollToEducation}
          scrollToAdditionalEducation={scrollToAdditionalEducation}
      />
      <Footer scrollToContacts={scrollToContacts}/>
    </div>
  );
};

export default App;
