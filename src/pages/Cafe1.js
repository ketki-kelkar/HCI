import React, { useState } from 'react';

import logo from '../images/logo.svg';
import cafe1 from '../images/cafe1.svg';
import home from '../images/home.svg';
import insta from '../images/insta.svg';
import facebook from '../images/facebook.svg';
import whatsapp from '../images/whatsapp.svg';
import decParty from '../images/decParty.svg';

import '../css/styles.css';


const Cafe1 = () => {
  return (
    <div className="app-container">
      <header className="header">
      <img src={logo} alt="logo"/>
        <div className="home1">
          <a href="./"><img src={home} alt="home"/></a>
        </div>
      </header>
      <main className="content">
        <div className="back-button"></div>
        <div className="cafe-info">
          <img src={cafe1} alt="FX Disco & Cafe" className="cafe-image" />
          <div className="details">
            <h1 className="cafe-name">FX Disco & Cafe</h1>
            <p className="opening-hours">
              <strong>Opening hours:</strong><br />
              Sunday to Thursday: 07:00-22:00h<br />
              Friday and Saturday: 07:00-03:00h
            </p>
            
            <p className="billiard">Billiard table available</p>
            <span className="social-icons">
              <a href="#"><img src={insta}></img></a>
              <a href="#"><img src={facebook}></img></a>
              <a href="#"><img src={whatsapp}></img></a>
            </span>
          </div>
        </div>
        <div className='gap1'></div>
        <nav className="navigation">
        <button className="nav-button active">Events</button>
        <a href='./menu-cafe1'><button className="nav-button">Menu</button></a>
        <a href='./calender-book'><button className="nav-button">BookNow</button></a>
        <a href='./drinkOfWeek'><button className="event-button">PRESS TO SEE THE DRINK OF THE WEEK</button></a>
      </nav>

        
      <a href='/party'><div className="events">
          <h2>December and Christmas parties!</h2>
          <img src={decParty} alt="Event" className="event-image" />
        </div>
        </a>
      </main>

      

    </div>
  );
}

export default Cafe1;
