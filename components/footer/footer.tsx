import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-center text-lg-start">
      <div className="text-center p-3">© {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
