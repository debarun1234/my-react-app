import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 bg-primary text-center text-accent">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Debarun Ghosh. All rights reserved.
      </p>
      <p className="text-sm">
        Created & designed by <strong>Debarun Ghosh</strong> using <strong>Vite</strong> + <strong>ReactJS</strong>.
      </p>
      <p className="text-sm mt-2">
        <Link to="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
