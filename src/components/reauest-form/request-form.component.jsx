import React, { useState } from 'react';
import './request-form.style.sass';
import house from "../../assets/images/house.png"
import house2 from "../../assets/images/house2.png"

export function Request(props) {
        const [name, setName] = useState("");
        const [number, setNumber] = useState("");
        const [email, setEmail] = useState("");
        const [isImageView, setIsImageView] = useState(false);
    
    function handleClickGetSmeta() {
        console.log(name, number, email)
    }

    function handleClickViewImage() {
        setIsImageView(!isImageView)
    }

    return (
      <div className="request-form">
          <div className="request-form__title">
            <p>Капитальный ремонт вашей квартиры</p>
            <p>со всеми работами и материалами</p>
            <p>от <font>2 500 руб/м2</font> и всего за <font>25 дней</font></p>
          </div>
          <div className="request-form__body">
            <div className="request-form__body_house">
                <img className="request-form__body_house_image" onClick={handleClickViewImage} src={house} alt="house" />
                <figcaption>68 м2, Москва</figcaption> 
                <figcaption>Двухкомнатная квартира</figcaption> 
            </div>
            {isImageView &&(<div className="request-form__body_house_imageView" >
                    <button onClick={handleClickViewImage} ></button>
                    <img src={house2} alt="house"/>
            </div>)}
            <div className="request-form__body_card">
                <div className="request-form__body_card_title">
                    <p>Оставьте заявку и получите подробную смету вашего ремонта в 3 вариантах уже через 2 часа</p>
                </div>
                <div className="request-form__body_card_name">
                    <p>Введите ваше имя</p>
                    <input value={name} type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div className="request-form__body_card_number">
                    <p>Введите ваш телефон</p>
                    <input value={number} type="tel" onChange={e => setNumber(e.target.value)} />
                </div>
                <div className="request-form__body_card_mail">
                    <p>Введите вашу почту</p>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="request-form__body_card_button">
                    <button onClick={handleClickGetSmeta}>Получить смету</button>
                </div>
            </div>
          </div>
      </div>
    );
}

