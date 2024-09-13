import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-primary text-center text-accent">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Debarun Ghosh. All rights reserved.
      </p>
      <p className="text-sm">
        Created & designed by <strong>Debarun Ghosh</strong> using <strong>Vite</strong> + <strong>ReactJS</strong>.
      </p>
    </footer>
  );
};

export default Footer;
