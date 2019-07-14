import React from 'react';
import s from './aboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={s.aboutMe}>
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
