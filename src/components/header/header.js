import React, { useState } from 'react';
import s from './header.module.scss';

const Header = ({scrollToHeader, handleClick, elementAboutMe, elementExperience,
                 elementEducation, elementAdditionalEducation, elementContacts}) => {

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

    const menu = menuItems.map(({label}) => {
        let classNames;

        if ((height >= elementAboutMe && height < elementExperience && label === 'обо мне') ||
            (height >= elementExperience && height < elementEducation && label === 'опыт работы') ||
            (height >= elementEducation && height < elementAdditionalEducation && label === 'образование') ||
            (height >= elementAdditionalEducation && height < elementContacts - 448 && label === 'навыки') ||
            (height >= elementContacts - 448 && label === 'контакты')) {
            classNames = s.headerLabelTextDecoration;
        }

        return (
            <span
                key={label}
                className={classNames}
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