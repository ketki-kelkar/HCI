import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const Contact = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>CONTACT</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1'>We're here to help! Whether you're a cafe owner looking to join our platform or a customer needing assistance with your reservation, feel free to reach out to us. We're always happy to connect with our community.</p>

        <h2 className='footer-h2'>General Inquiries</h2>
        <p className='para1'>Email us at: <a href="mailto:info@ourplatform.com">info@ourplatform.com</a></p>

        <h2 className='footer-h2'>For Cafe Owners</h2>
        <p className='para1'>Interested in joining our platform? Reach out to us at: <a href="mailto:partners@ourplatform.com">partners@ourplatform.com</a></p>

        <h2 className='footer-h2'>Customer Support</h2>
        <p className='para1'>Need help with a reservation or have questions? Contact our support team:</p>
        <p className='para1'>Email: <a href="mailto:support@ourplatform.com">support@ourplatform.com</a></p>
        <p className='para1'>Phone: +91 5858585858</p>

        <h2 className='footer-h2'>Business Hours</h2>
        <p className='para1'>Monday - Friday: 9:00 AM - 6:00 PM<br/> 
        Saturday: 10:00 AM - 4:00 PM<br/>
        Sunday: Closed</p>

      </div>
    </>
  );
};

export default Contact;
