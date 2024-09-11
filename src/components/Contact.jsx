import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  const downloadResume = () => {
    window.open('public\Debarun Ghosh_Resume.pdf', '_blank');
  };
  

  return (
    <section className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-secondary text-accent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-secondary text-accent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-secondary text-accent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-12">
          <button
            onClick={downloadResume}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2"
          >
            <FaDownload />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="mt-12 text-center text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="tel:+919742085682" className="flex items-center space-x-2">
              <FaPhone className="text-xl" />
              <span>+91 9742085682</span>
            </a>
            <a href="mailto:debarun.ghosh.2024@gmail.com" className="flex items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <span>debarun.ghosh.2024@gmail.com</span>
            </a>
            <a href="https://www.google.com/maps?q=Yelahanka,+Karnataka,+Bangalore,+560064" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>Bangalore, Karnataka, 560063</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

