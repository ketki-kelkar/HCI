import logo from '../images/logo.svg';
import cafe1 from '../images/cafe1.svg';
import cafe2 from '../images/cafe2.svg';
import cafe3 from '../images/cafe3.svg';
import cafe4 from '../images/cafe4.svg';
import cafe5 from '../images/cafe5.svg';
import cafe6 from '../images/cafe6.svg';
import cafe7 from '../images/cafe7.svg';

import '../css/main.css';

const Main = () => {
  return (
    <div className="container">
      <header className="header">
      <img src={logo} alt="logo"/>
        <h1>Main Page</h1>
        <div className="language-selector">
          <span>BG/EN</span>
        </div>
      </header>

      <main className="content">
        <div className="cafe-list">
          <div className="cafe-item">
            <a href="./cafe1"><img src={cafe1} alt="FX Disco & Cafe" /></a>
            <h2>FX Disco & Cafe</h2>
            <p>ph: +91 9797979797</p>
            <p>4, Kengal Hanumanthaiah Rd, Bheemanna Garden, Shanti Nagar, Bengaluru</p>
          </div>
          <div className="cafe-item">
            <a href="./cafe2"><img src={cafe2} alt="Randevu bar Deluxe" /></a>
            <h2>Randevu bar Deluxe</h2>
            <p>ph: +91 9569569565</p>
            <p>9th Main Rd, 2nd Block, Jaya Nagar East, Jayanagar, Bengaluru</p>
          </div>
          <div className="cafe-item">
            <a href="./cafe3"><img src={cafe3} alt="Satellite cafe bar & dinner" /></a>
            <h2>Satellite cafe bar & dinner</h2>
            <p>ph: +91 974587456</p>
            <p>3, 8th Main Rd, 4th Block, Koramangala, Bengaluru</p>
          </div>
        </div>


        <div className="container2">
              <div className="left">
                <h1 className='upcomingTitle'>Upcoming Events</h1>
              </div>
              <div className="right">
                <div className="event-details">
                  <p className='event-p'>Christmas Party </p>
                  <p className='event-p'>Are you ready for the most exciting day of the year?</p>
                  <a href="./party"><button>Click here for more info</button></a>
                </div>
              </div>
            </div>


        <div className="main-page-2">
          <div className="cafes-section">
            <div className="cafes-title">
              <h3>Cafes, bars and clubs in Parvomay</h3>
            </div>
            <div className="cafes-description">
              <p>Welcome to the hot spots of our city. In this site you can find every place where young people go and spend their time. Our cafes provide free WiFi, good music, tasty drinks and delicious food. Having a good time is guaranteed. If you already visited us and you enjoyed our place, you can recommend us to a friend, because as we all know... the more THE BETTER!</p>
            </div>
            <div className="cafes-logos">
              <img src={cafe4} alt="Carlsberg" />
              <img src={cafe5} alt="Kamenitza" />
              <img src={cafe6} alt="Costa Coffee" />
              <img src={cafe7} alt="Nova Brasilia" />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <ul>
            <a href="./client"><li className='footers1'>Clients</li></a>
            <a href="./privacy"><li className='footers1'>Privacy Policy</li></a>
            <a href="./ads"><li className='footers1'>Ads</li></a>
          </ul>
          <ul>
            <a href="./about"><li className='footers1'>About us</li></a>
            <a href="./contact"><li className='footers1'>Contact</li></a>
            <a href="./help"><li className='footers1'>Help</li></a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Main;