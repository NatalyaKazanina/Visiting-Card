import React from 'react';
import s from './footer.module.scss';

const Footer = () => {
    return(
        <div className={s.footer}>
            <span className={s.footerTitle}>
                свяжитесь со мной
            </span>
            <div className={s.footerContacts}>
                <h1>Наталья Казанина</h1>
                <h2>web-разработчик</h2>
                <h3>Телефон:</h3>
                <span>+7-913-900-87-03</span>
                <h3>Email:</h3>
                <span>mia03@mail.ru</span>
            </div>
        </div>
    )
};

export default Footer;