import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const Ads = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>ADS</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1'>Our platform offers advertising opportunities for cafes and related businesses to reach a highly engaged audience. Whether you're looking to promote a new cafe opening or showcase special events, we provide targeted advertising solutions that cater to your needs.</p>

        <h2 className='footer-h2'>Ad Types</h2>
        <ul>
          <li className='li'><strong>Banner Ads:</strong> Display your cafe or services prominently on our website to attract more customers.</li>
          <li className='li'><strong>Featured Listings:</strong> Get your cafe featured on our homepage or search results to increase visibility.</li>
          <li className='li'><strong>Sponsored Content:</strong> Promote events or special offers through sponsored posts that reach your target audience.</li>
        </ul>

        <h2 className='footer-h2'>Why Advertise with Us?</h2>
        <p className='para1'>By advertising on or platform, you gain access to a large community of cafe-goers and event organizers. Our platform is designed to connect users with cafes, making it an ideal space for targeted promotions.</p>

        <h2 className='footer-h2'>Contact Us</h2>
        <p className='para1'>If you're interested in advertising opportunities, please reach out to our team at <a href="mailto:ads@ourplatform.com">ads@ourplatform.com</a>. We’ll work with you to create a customized advertising plan that suits your business goals.</p>

      </div>
    </>
  );
};

export default Ads;
