import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const Help = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>HELP</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1'>Welcome to our Help Center! Whether you’re having trouble making a reservation or need assistance with your account, we’re here to help. Below are some common topics. If you don’t find what you need, feel free to contact us for further assistance.</p>

        <h2 className='footer-h2'>Frequently Asked Questions</h2>
        <ul>
          <li className='li'><strong>How do I make a reservation?</strong><br />Visit the cafe’s profile on our platform and choose the "Reserve" option. Select the time and date, and confirm your booking.</li>
          <li className='li'><strong>How do I cancel a reservation?</strong><br />You can cancel your reservation through your account dashboard or by contacting the cafe directly through our platform.</li>
          <li className='li'><strong>What payment methods are accepted?</strong><br />We accept major credit cards and digital payments through our secure payment system.</li>
          <li className='li'><strong>How do I contact customer support?</strong><br />If you need further assistance, reach out to us at <a href="mailto:support@yourplatform.com">support@yourplatform.com</a> or call us at [+91 5858585858].</li>
        </ul>

        <h2 className='footer-h2'>Technical Support</h2>
        <p className='para1'>If you’re experiencing technical issues with the website, please clear your browser cache and try again. For ongoing issues, contact our technical support team.</p>

        <h2 className='footer-h2'>Contact Us</h2>
        <p className='para1'>Still need help? Our support team is available Monday to Friday from 9:00 AM to 6:00 PM. Reach us via email at <a href="mailto:support@ourplatform.com">support@ourplatform.com</a> or call [+91 5858585858].</p>

      </div>
    </>
  );
};

export default Help;
