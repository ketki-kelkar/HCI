import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const Clients = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>CLIENTS</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1'>Here, we are proud to work with a diverse range of clients, including local cafes, corporate clients, event planners, and individual users who love discovering new cafe experiences.</p>

        <h2 className='footer-h2'>Partner Cafes</h2>
        <p className='para1'>Our platform collaborates with a variety of cafes, ranging from small boutique coffee shops to large cafe chains. Each partner cafe offers a unique experience, and we make it easy for customers to find the perfect spot based on their preferences.</p>

        <h2 className='footer-h2'>Corporate Clients</h2>
        <p className='para1'>We help corporate clients find ideal cafes for business meetings, corporate events, and team-building activities. With the ability to reserve spaces and organize events, our platform streamlines the entire process for businesses looking for convenient venues.</p>

        <h2 className='footer-h2'>Event Planners</h2>
        <p className='para1'>Event planners use our platform to organize events of all sizes, from intimate gatherings to large-scale functions. With customizable booking options and access to multiple cafes, event organizers can find the perfect venue and easily manage guest lists and special requirements.</p>

        <h2 className='footer-h2'>Individual Users</h2>
        <p className='para1'>Whether you're a cafe enthusiast or someone new to cafe culture, [Your Platform Name] offers a seamless experience to explore cafes, make reservations, and enjoy special deals at your favorite spots.</p>

        <h2 className='footer-h2'>Join Us</h2>
        <p className='para1'>Whether you're a cafe looking to expand your customer base or a client seeking the perfect cafe experience, we invite you to join [Your Platform Name] and discover a world of possibilities.</p>

      </div>
    </>
  );
};

export default Clients;
