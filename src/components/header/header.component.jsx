import React from 'react';

import './header.style.sass';
import logo from "../../assets/images/logo.png";


export function Header() {
  
    return (
      <div className="header">
        <div className="header__about">
          <p>комплексный ремонт квартир:</p>
          <p>проектирование, дизайн, ремонт</p>
        </div>   
        <div className="header__logo">
          <img className="header__logo_image" src={logo} alt="header logo" />
        </div>
        <div className="header__info">
            <div className="header__info_number">
              <div className="icon-phone-1"></div>
              <p><b>+7</b>(495)<b>109-0-212</b></p>
            </div>
            <div className="header__info_mail">
              <div className="icon-mail"></div>
              <p>info@bh-d.ru</p>
            </div>
        </div>
      </div>
    );
}
