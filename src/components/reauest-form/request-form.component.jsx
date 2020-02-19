import React from 'react';
import './request-form.style.sass';
import house from "../../assets/images/house.png"

export function Request(props) {
    return (
      <div className="request-form">
          <div className="request-form__title">
            <p>Капитальный ремонт вашей квартиры</p>
            <p>со всеми работами и материалами</p>
            <p>от <font>2 500 руб/м2</font> и всего за <font>25 дней</font></p>
          </div>
          <div className="request-form__body">
            <div className="request-form__body_house">
                <img className="request-form__body_house_image" src={house} alt="house" />
                <figcaption>68 м2, Москва</figcaption> 
                <figcaption>Двухкомнатная квартира</figcaption> 
            </div>
            <div className="request-form__body_card">
                <div className="request-form__body_card_title">
                    <p>Оставьте заявку и получите подробную смету вашего ремонта в 3 вариантах уже через 2 часа</p>
                </div>
                <div className="request-form__body_card_name">
                    <p>Введите ваше имя</p>
                    <input type="text" />
                </div>
                <div className="request-form__body_card_number">
                    <p>Введите ваш телефон</p>
                    <input  type="tel" />
                </div>
                <div className="request-form__body_card_mail">
                    <p>Введите вашу почту</p>
                    <input  type="email" />
                </div>
                <div className="request-form__body_card_button">
                    <button>Получить смету</button>
                </div>
            </div>
          </div>
      </div>
    );
}