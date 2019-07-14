import React from 'react';
import s from './experience.module.scss';

const Experience = () => {
    return (
        <div className={s.experience}>
            <div className={s.experienceWrapper}>
                <h1>опыт работы</h1>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>Апрель 2018 — по настоящее время</p>
                        <h3>Web-разработчик</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Фриланс</p>
                        <span>Изучение создания web-приложений в с использованием JavaScript, HTML5,
                            CSS3, React, Redux, Java
                        </span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>Май 2012 — по настоящее время</p>
                        <h3>Директор розничной сети</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>ООО "Аура" Сеть салонов SAMSONITE</p>
                        <span>Обеспечение прироста товарооборота, увеличения показателей KPI, управление продажами,
                            отчетность, аналитика, активные продажи, рекрутинг, обучение, аттестация персонала.
                            Организация и оптимизация рабочих процессов, документооборота и др. Успешный опыт организации
                            работы сети магазинов с "нуля", продвижения бизнеса. Эффективное применение методов
                            по увеличению KPI‚ регулярное превышение планов продаж.
                            Внедрение техники продаж‚ стандартов сервиса, методов мотивации. Успешное создание
                            эффективных команд. Навыки бюджетирования, стандартизации. Опыт организации маркетинговых
                            мероприятий
                        </span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>Январь 2011 — март 2012</p>
                        <h3>Управляющий магазином</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>ООО "ГАЛАТЕЯ" Магазин «Мегаспорт»</p>
                        <span>Поиск торговых площадей в г. Новосибирск, мониторинг рынка, открытие нового магазина.
                            Организация и обеспечение бесперебойной работы магазина. Обеспечение выполнения плановых
                            показателей. Составление бюджета подразделения, ведение отчетности, аналитика. Подбор,
                            обучение персонала, контроль адаптации, проведение тренингов. Мотивация персонала,
                            постановка задач, оценка и стимулирование качества продаж, и др.
                        </span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>Февраль 2010 — ноябрь 2010</p>
                        <h3>Директор филиала</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>ООО «НОВЭКС» Сеть розничных магазинов</p>
                        <span>Обеспечение выполнения плана продаж, составление бюджета подразделения,
                            ведение отчетности. Организация процесса и управление розничными продажами,
                            стандартизация. Подбор сотрудников, контроль адаптации, координация, мотивация.
                            Оценка и стимулирование качества продаж, и др. Достижения: создание дружного
                            коллектива - команды; увеличение проходимости магазина; перевыполнение плана
                            продаж с третьего месяца работы; заключение долгосрочных договоров на оптовую
                            продажу продукции.
                        </span>
                    </div>
                </div>
            </div>
            <div className={s.experienceWrapper}>
                <h1>образование</h1>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2004 — 2007</p>
                        <h3>Менеджер высшего звена</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Новосибирский государственный университет экономики и управления</p>
                        <span>Факультет менеджмента организации</span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>1998 — 2003</p>
                        <h3>Бакалавр юриспруденции</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Новосибирский гуманитарный институт</p>
                        <span>Юридический факультет</span>
                    </div>
                </div>
            </div>
            <div className={`${s.experienceWrapper} ${s.experienceKvalification}`}>
                <h1>повышение квалификации</h1>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2019</p>
                        <h3>Java-разработчик</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>JavaRush</p>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2019</p>
                        <h3>React-разработчик</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>UDEMY</p>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2017</p>
                        <h3>Сертификат соответствия</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Русская Школа Управления</p>
                        <span>Система эффективного менеджмента</span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2016</p>
                        <h3>Сертификат соответствия</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Русская Школа Управления</p>
                        <span>Бизнес в кризис: повышение эффективности управления компанией</span>
                    </div>
                </div>
                <div className={s.experienceBlock}>
                    <div className={s.experienceBlockData}>
                        <p>2009</p>
                        <h3>Сертификат соответствия</h3>
                    </div>
                    <div className={s.experienceBlockInfo}>
                        <p>Новосибирская школа бизнеса</p>
                        <span>Теория и практика продаж / Продажи в клиентском сервисе</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;