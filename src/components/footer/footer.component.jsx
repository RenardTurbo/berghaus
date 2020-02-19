import React from 'react';
import './footer.style.sass';
import ofice from "../../assets/images/ofice.png"


export function Footer(props) {
    return (
      <div className="footer">     
        <div className="footer__office-card">
            <div className="footer__office-card_title">
                <p>Мы всегда рады видеть</p>
                <p>вас в нашем офисе:</p>
            </div>
            <img className="footer__office-card_image" src={ofice} alt="footer ofice" />
            <div className="footer__office-card_phone">
                <div className="icon-phone-1"></div>
                <p>+7 (495) 109-0-212</p>
            </div>
            <div className="footer__office-card_mail">
                <div className="icon-mail"></div>
                <p>info@bh-d.ru</p>
            </div>
            <div className="footer__office-card_locate">
                <div className="icon-location"></div>
                <p>г. Москва ул. Тверская, д. 1 (метро 1905 года)</p>
            </div>
            <div className="footer__office-card_clock">
                <div className="icon-clock"></div>
                <p>с 9:00 до 18:00 без выходных</p>
            </div>
        </div>
        <div className="footer__about">
            <div className="footer__about_inn">
                <p>ИНН 0123456789</p>
            </div>
            <div className="footer__about_site">
                <p>Разработка сайта:</p>
            </div>
        </div>
      </div>
    );
}