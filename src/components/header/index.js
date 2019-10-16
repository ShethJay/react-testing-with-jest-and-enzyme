import React from 'react';
import './styles.scss';
import Logo from './../../assests/images/images.png'
const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
           <img src={Logo} alt="logo" /> 
        </div>
      </div>
    </header>
  );
};

export default Header;