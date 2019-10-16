import React from 'react';
import './styles.scss';
import Logo from './../../assests/images/images.png'
const Header = (props) => {
  return (
    <header className="header-component" data-test="header-component">
      <div className="wrap">
        <div className="logo">
           <img src={Logo} alt="logo" className="logo-img" data-test="logo-img" /> 
        </div>
      </div>
    </header>
  );
};

export default Header;