import React from "react"; 
import logo from '../images/logo.svg';
import home from '../images/home.svg';

const MenuCafe1 = () => {

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" className="logo"/>
        <h1>MENU</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" className="home-icon"/></a>
        </div>
      </header>

      <div className="menu">
        <div className="item">
          <h2 className="menu-head">MAIN</h2>
          <ul>
            <li className="li">Spaghetti Carbonara</li>
            <li className="li">Macaroni and Cheese</li>
            <li className="li">Margarita Pizza</li>
            <li className="li">Club Sandwich</li>
          </ul>
        </div>

        <div className="item">
          <h2 className="menu-head">DRINK</h2>
          <ul>
            <li className="li">Honey Tea</li>
            <li className="li">Lemon Tea</li>
            <li className="li">Cappuccino</li>
            <li className="li">Beer</li>
            <li className="li">Coffee</li>
            <li className="li">Water</li>
          </ul>
        </div>

        <div className="item">
          <h2 className="menu-head">DESSERT</h2>
          <ul>
            <li className="li">Pancake</li>
            <li className="li">Ice Cream</li>
            <li className="li">Lava Cake</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCafe1;
