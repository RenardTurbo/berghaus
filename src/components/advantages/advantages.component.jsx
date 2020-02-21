import React from 'react';

import './advantages.style.sass';
import paymentcard from "../../assets/images/paymentcard.png"
import repairscard from "../../assets/images/repairscard.png"


export function Advantages() {

    return (
        <div className="advantages">
            <div className="advantages__title">
                <p>Реальные преимущества на каждом этапе работ</p>
            </div>
            <div className="advantages__subtitle">
                <p>За <font>9 лет работы</font> в сфере дизайна, проектирования и ремонта мы продумали для вас каждую мелочь</p>
            </div>
            <div className="advantages__card">
                <div className="advantages__card_columnFirst">
                    <div className="advantages__card_columnFirst_paymentCard">
                        <div className="advantages__card_columnFirst_paymentCard_logo">
                            <img src={paymentcard} alt="logo paymen card"/>
                        </div>
                        <div className="advantages__card_columnFirst_paymentCard_title">
                            <p>Замер и расчёт сметы</p>
                            <hr/>
                        </div>
                        <div className="advantages__card_columnFirst_paymentCard_about">
                            <li><p>Расчитываем первую смету за 2 часа</p></li>
                            <li><p>Заемеряем бесплатно на следующий день</p></li>
                            <li><p>Рассчитываем финальную смету через 24 часа</p></li>
                        </div>
                    </div>
                    <div className="advantages__card_columnFirst_repairsCard">
                        <div className="advantages__card_columnFirst_repairsCard_logo">
                            <img src={repairscard} alt="logo repairs card"/>
                        </div>
                        <div className="advantages__card_columnFirst_repairsCard_title">
                            <p>Ремонт "под ключ"</p>
                            <hr/>
                        </div>
                        <div className="advantages__card_columnFirst_repairsCard_subtitle">
                            <p>Забудьте о поиске десятков подрядчиков, Мы делаем настоящий ремонт "под ключ":</p>
                        </div>
                        <div className="advantages__card_columnFirst_repairsCard_about">
                            <li><p>Разработка дизайн-концепции</p></li>
                            <li><p>Проектирование инженерных систем</p></li>
                            <li><p>Ремонтные и монтажные работы</p></li>
                            <li><p>Комплектация квартиры всем необходимым</p></li>
                            <li><p>Гарантийное и сервисное обслуживание</p></li>
                        </div>
                    </div>
                </div>
                <div className="advantages__card_columnSecond">
                    <div className="advantages__card_columnSecond_repairsCard">
                        <div className="advantages__card_columnSecond_repairsCard_logo">
                            <img src={repairscard} alt="logo repairs card"/>
                        </div>
                        <div className="advantages__card_columnSecond_repairsCard_title">
                            <p>Ремонт "под ключ"</p>
                            <hr/>
                        </div>
                        <div className="advantages__card_columnSecond_repairsCard_subtitle">
                            <p>Забудьте о поиске десятков подрядчиков, Мы делаем настоящий ремонт "под ключ":</p>
                        </div>
                        <div className="advantages__card_columnSecond_repairsCard_about">
                            <li><p>Разработка дизайн-концепции</p></li>
                            <li><p>Проектирование инженерных систем</p></li>
                            <li><p>Ремонтные и монтажные работы</p></li>
                            <li><p>Комплектация квартиры всем необходимым</p></li>
                            <li><p>Гарантийное и сервисное обслуживание</p></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

