import React, {useState} from 'react';
import s from './header.module.scss';

const Header = () => {
    const [menuMobile, setStateMenu] = useState(false);

    const scrollToHeader = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return(
        <div className={s.header}>
            <h1 className={s.headerLogo} onClick={() => {scrollToHeader()}}>Наталья Казанина</h1>
            <div className={menuMobile ? s.headerMenu : s.headerMenuHide}>
                <span>опыт работы</span>
                <span>образование</span>
                <span>навыки</span>
                <span>контакты</span>
            </div>
            <div className={s.headerMenuIcon} onClick={() => setStateMenu(!menuMobile)}>
                <i className={` material-icons`}>menu</i>
            </div>
        </div>
    )
};

export default Header;