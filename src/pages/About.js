import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const AboutUs = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>ABOUT US</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1' >Welcome, the ultimate platform connecting you to the best cafes in your city. Whether you're looking for a cozy spot for your morning coffee or planning an event at a stylish cafe, we make it easy for you to discover, book, and enjoy your cafe experience.</p>

        <h2 className='footer-h2'>Our Mission</h2>
        <p className='para1' >Our mission is to simplify the process of reserving tables and organizing events at cafes by bringing a wide range of options together on one easy-to-use platform. We aim to enhance the cafe experience for both individual visitors and groups looking to host special occasions.</p>

        <h2 className='footer-h2'>Why Choose Us?</h2>
        <p className='para1' >We collaborate with some of the best cafes in the city, ensuring a seamless reservation process for our users. With [Your Platform Name], you can:</p>
        <ul>
        <li className='li'>Explore a diverse selection of cafes</li>
        <li className='li'>Book tables in real-time</li>
        <li className='li'>Organize events with personalized options</li>
        <li className='li'>Receive exclusive deals and offers from our partner cafes</li>
        </ul>

        <h2 className='footer-h2'>Our Values</h2>
        <p className='para1' >We believe in supporting local businesses and building a community around cafe culture. Our platform is designed to promote convenience and enhance the overall experience for both customers and cafes.</p>

        <h2 className='footer-h2'>Discover New Cafes</h2>
        <p className='para1' >Looking for a new place to try? Our curated list of cafes ensures that you'll always have access to the latest and greatest spots around. Whether you're in the mood for a quiet corner or a bustling cafe for a group event, we've got you covered.</p>

        <h2 className='footer-h2'>Join Us</h2>
        <p className='para1' >Explore, book, and enjoy the best cafes in town with us!</p>


      </div>
    </>
  );
};

export default AboutUs;
