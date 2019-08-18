import React, { useState } from 'react';
import s from './header.module.scss';

const Header = ({scrollToHeader, handleClick, elementAboutMe, elementExperience}) => {

    const menuItems = [
        {label: 'обо мне'},
        {label: 'опыт работы'},
        {label: 'образование'},
        {label: 'навыки'},
        {label: 'контакты'}
    ];

    const [menuMobile, setStateMenu] = useState(false);
    const [height, setStateHeight] = useState(0);


    window.addEventListener('scroll', () => {
        setStateHeight(window.scrollY);
    });

    let classNames = ``;

    const menu = menuItems.map(({label}) => {

        // const isActive = height === elementAboutMe;
        // const clazz = isActive ? `${s.headerLabelTextDecoration}` : '';
        // console.log(clazz);

        if (height >= elementAboutMe && height < elementExperience) {
            classNames = `${s.headerLabelTextDecoration}`;
        }

        // if (height >= elementAboutMe) {
        //     classNames = `${s.headerAboutMe}`;
        // }

        return (
            <span
                key={label}
                className={classNames}
                //className={clazz}
                onClick={() => handleClick(label)}
            >
                {label}
            </span>
        )
    });

    return (
        <div className={s.header}>
            <h1 className={s.headerLogo} onClick={scrollToHeader}>Наталья Казанина</h1>
            <div className={menuMobile ? s.headerMenu : s.headerMenuHide} onClick={() => setStateMenu(!menuMobile)}>
                {menu}
            </div>
            <div className={s.headerMenuIcon} onClick={() => setStateMenu(!menuMobile)}>
                {!menuMobile ?
                    <i className={`material-icons`}>menu</i> :
                    <i className={`material-icons`}>close</i>
                }
            </div>
        </div>
    );
};

export default Header;