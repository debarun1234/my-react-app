import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_a5zs5ji', 'template_t0e4ap4', form.current, 'lW2ZmhmKbSE3i6EyU')
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('An error occurred, please try again.');
      });
  };

  const downloadResume = () => {
    window.open('../Debarun Ghosh_Resume.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-primary text-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form Section */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input type="text" name="from_name" placeholder="Your Name (Required)" required className="w-full px-4 py-2 bg-secondary text-accent rounded-lg"/>
              <input type="email" name="from_email" placeholder="Your Email (Required)" required className="w-full px-4 py-2 bg-secondary text-accent rounded-lg"/>
              <input type="text" name="phone" placeholder="Your Phone Number (Optional)" className="w-full px-4 py-2 bg-secondary text-accent rounded-lg"/>
              <textarea name="message" placeholder="Your Message (Required)" required rows="4" className="w-full px-4 py-2 bg-secondary text-accent rounded-lg"></textarea>
              <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>

          {/* Additional Info Section */}
          <div className="space-y-4">
            <button onClick={downloadResume} className="w-full py-3 bg-green-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition duration-300">
              <FaDownload />
              <span>Download Resume</span>
            </button>
            <div className="text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-xl" />
                <span>+91 9742085682</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-xl" />
                <span>debarun.ghosh.2024@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <span>Bangalore, Karnataka, 560063</span>
              </div>
            </div>
            {/* Embed Google Map */}
            <div className="w-full h-64">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0036220248486!2d77.60014871482266!3d12.970015990849334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1620290d7f1f%3A0x10416a08c579d8e7!2sBengaluru%2C%20Karnataka%20560063!5e0!3m2!1sen!2sin!4v1664501745123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
