import React, { createRef, useEffect } from 'react';
import s from './aboutMe.module.scss';

const AboutMe = ({scrollToAboutMe}) => {

    const refAboutMe = createRef();

    useEffect(() => {
        scrollToAboutMe(refAboutMe.current.offsetTop - 96);
    });

    return (
        <div className={s.aboutMe} ref={refAboutMe}>
            <div className={s.aboutMeInsert}></div>
            <h1>Обо мне</h1>
            <p className={s.aboutMeInfo}>Результативность, умение работать в команде, ответственность, высокая работоспособность,
                желание развиваться в сфере web-разработки. Быстро усваиваю информацию, умею работать
                с профессиональной литературой, находить необходимую для работы информацию и самообучаться.
                Знание английского языка.
            </p>
        </div>
    )
};

export default AboutMe;
