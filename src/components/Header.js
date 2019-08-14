import React from 'react';
import img from '../../public/images/favicon.png';
const Header = (props) => (
  <div className="header">
    <div className="container">
      <div className="header__title-container">
        <h1 className="header__title">{props.title}</h1>
        <img src={img} alt="react icon" height="42" width="42" />
      </div>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
}

export default Header;
