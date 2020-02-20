import React from 'react';
import './footer.style.sass';
import ofice from "../../assets/images/ofice.png";
import locate from "../../assets/images/locate.png"


export function Footer(props) {
    return (
      <div className="footer"> 
        <div className="footer__location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1122.5444894338902!2d37.614005!3d55.7569565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5aabcde2ed%3A0x8582e80fabd33040!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMSwg0JzQvtGB0LrQstCwLCAxMjUwMDk!5e0!3m2!1sru!2sru!4v1582181208591!5m2!1sru!2sru" width="1720px" height="800px"  allowfullscreen=""></iframe>     
        </div>
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