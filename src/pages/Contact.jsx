import React from 'react';
import './Contact.css';
// import contact_img1 from './../assets/images/contact_img1.jpg';
// import contact_img5 from './../assets/images/contact.jpg';
// import contact_img6 from './../assets/images/email.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact </h1>
      <p><b>For any inquiries or support, please contact </b></p>
      <ul className="contact-list">
        <li>
          <img src='contact_img1.jpg' alt="Phone Icon" />
          <a href="tel:+255621055225">+255 621 055 225</a>&nbsp;/&nbsp;<a href="tel:+255621055225">+255 621 055 225</a>
        </li>
        <li>
          <img src='contact_img2.jpg' alt="Email Icon" />
          <a href="hythammuu@gmail.com">hythammuu@gmail.com</a>
        </li>
        <li>
          <img src='contact_img3.jpg' alt="WhatsApp Icon" />
          <a href="https://wa.me/255621055225">062 105 225</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;