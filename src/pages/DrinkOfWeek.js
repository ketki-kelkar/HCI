import React from 'react';

import logo from '../images/logo.svg';
import home from '../images/home.svg';
import hotChocolate from '../images/hotChocolate.svg';

import '../css/drink.css';


const DrinkOfTheWeek = () => {
  return (
    <div className="drink-container">
        <header className="header">
      <img src={logo} alt="logo"/>
        <div className="home1">
          <a href="./"><img src={home} alt="home"/></a>
        </div>
      </header>
      <div className="drink-header">
        <h1>Drink of the week</h1>
        
      </div>
      <div className="drink-content">
        <div className="text-content">
          <h2>Hot chocolate</h2>
          <p>
            This week's favourite drink of our citizens is our hot chocolate.<br></br>
            The sweetness of it makes it so delicious. In these cold days the<br></br>
            warm cup, which we serve it with, can heat your hands just like<br></br>
            seeing you in our cafe, heats our hearts.
          </p>
        </div>
        <div className="image-content">
          <img className='imag1' src={hotChocolate} alt="Hot chocolate" />
        </div>
      </div>
      <div className="book-container">
        <a href="./calender-book"><button className="book-button">Book a table</button></a>
    </div>
    </div>
  );
};

export default DrinkOfTheWeek;

