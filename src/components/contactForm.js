import React from 'react';
import '../contactForm.css';
const ContactUsForm = ({isFormVisible, toggleFormVisibility}) => {
  return (
    <div className="contact-form-container">
      {isFormVisible && (
        <div className="contact-popup">
          <div className="contact-form">
            <h2><img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png' width={'30px'} alt='#'></img> Mail us</h2>
            <form action="#" method="post">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder='Type your FullName' required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='Enter your Mail ID' required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder='Type Your Text Message....' required></textarea>
              <br />
              <button type="submit">Send Message</button>
            </form>
            <button className="close-button" onClick={toggleFormVisibility}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
