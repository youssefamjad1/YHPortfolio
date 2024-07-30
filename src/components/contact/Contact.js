import React, { useState } from 'react';
import './Contact.css'; // Ensure this path matches your project structure
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import emailjs from 'emailjs-com'; // Import EmailJS
import SocialIcon from '../home/SocialIcon';
import { Box } from "@mui/material";
import { info } from "../../info/Info"; // Import SocialIcon component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    const { name, subject, phone, email, message } = formData;
    let text = '';

    if (name.length < 5) {
      text = 'Please Enter a valid Name';
    } else if (subject.length < 10) {
      text = 'Please Enter a Correct Subject';
    } else if (isNaN(phone) || phone.length !== 10) {
      text = 'Please Enter a valid Phone Number';
    } else if (email.indexOf('@') === -1 || email.length < 6) {
      text = 'Please Enter a valid Email';
    } else if (message.length <= 40) {
      text = 'Please Enter More Than 40 Characters';
    } else {
      return true;
    }

    setErrorMessage(text);
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Send email using EmailJS
      emailjs.sendForm('service_1mp33nh', 'template_rb9fqrs', e.target, 'mLX94O2UcYEFQ9oDw')
        .then((result) => {
          console.log('Email sent:', result.text);
          alert('Form Submitted Successfully!');
          setFormData({
            name: '',
            subject: '',
            phone: '',
            email: '',
            message: '',
          });
          setErrorMessage('');
        }, (error) => {
          console.error('Email sending error:', error.text);
          setErrorMessage('Failed to send email. Please try again later.');
        });
    }
  };

  return (
    <div className="contact-container">
      <div className="wrapper">
        <h2>Contact us</h2>
        {errorMessage && <div id="error_message">{errorMessage}</div>}
        <form id="myform" onSubmit={handleSubmit}>
          <div className="form_group">
            <div className="input_field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name" // Required for emailjs
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-tag"></i>
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject" // Required for emailjs
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone" // Required for emailjs
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email" // Required for emailjs
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input_field">
            <textarea
              placeholder="Message"
              id="message"
              name="message" // Required for emailjs
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <Box className="social-icons" display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
        {info.socials.map((social, index) => (
          <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
        ))}
      </Box>
    </div>
  );
};

export default Contact;
