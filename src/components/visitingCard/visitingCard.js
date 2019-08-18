import React from 'react';
import s from './visitingCard.module.scss';

const VisitingCard = () => {

    return(
        <div className={s.visitingCard} >
            <div className={s.visitingCardImage}>
                <div className={s.visitingCardShadow}>
                    <div className={s.visitingCardPhoto}></div>
                    <div className={s.visitingCardInfo}>
                        <h1>Наталья Казанина</h1>
                        <h2>web-разработчик</h2>
                        <h3>Телефон:</h3>
                        <span>+7-913-900-87-03</span>
                        <h3>Email:</h3>
                        <span>mia03@mail.ru</span>
                        <h3>Адрес:</h3>
                        <span>ул. Нижегородская, 18, Новосибирск, Россия</span>
                        <h3>Дата рождения:</h3>
                        <span>25 июля 1980</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VisitingCard;