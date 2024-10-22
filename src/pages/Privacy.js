import logo from '../images/logo.svg';
import home from '../images/home.svg';

  
import '../css/footers.css';

const Privacy = () => {
  return (
    <>
      <header className="header1">
        <img src={logo} alt="logo" />
        <h1>PRIVACY POLICY</h1>
        <div className="home1">
          <a href="./"><img src={home} alt="home" /></a>
        </div>
      </header>
      <div className='box'>
        <p className='para1'>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform. By using our website and services, you agree to the terms outlined below.</p>

        <h2 className='footer-h2'>Information We Collect</h2>
        <p className='para1'>We collect personal information that you provide when registering, making a reservation, or contacting us. This may include your name, email address, phone number, and payment details.</p>

        <h2 className='footer-h2'>How We Use Your Information</h2>
        <p className='para1'>Your information is used to facilitate the services we offer, including processing reservations, managing bookings, and improving our platform. We may also use your information to communicate with you about promotions or updates related to our platform.</p>

        <h2 className='footer-h2'>Data Security</h2>
        <p className='para1'>We take data security seriously and use industry-standard measures to protect your personal information. However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.</p>

        <h2 className='footer-h2'>Third-Party Sharing</h2>
        <p className='para1'>We may share your information with our partner cafes for the purpose of processing bookings and providing services. We do not sell your information to third parties.</p>

        <h2 className='footer-h2'>Your Rights</h2>
        <p className='para1'>You have the right to access, modify, or request the deletion of your personal information at any time. If you have any concerns about your privacy, please contact us at <a href="mailto:privacy@ourplatform.com">privacy@ourplatform.com</a>.</p>

        <h2 className='footer-h2'>Changes to This Policy</h2>
        <p className='para1'>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly.</p>


      </div>
    </>
  );
};

export default Privacy;
