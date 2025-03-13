import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex flex-col items-center space-y-3">
        {/* Back to Top Icon */}
        <div className="cursor-pointer">
          <span className="text-lg">⬆</span>
        </div>
        <p className="text-sm font-semibold">BACK TO TOP</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          <a href="#" className="p-2 border border-white rounded">
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a href="#" className="p-2 border border-white rounded">
            <FaLinkedinIn className="text-white text-lg" />
          </a>
          <a href="#" className="p-2 border border-white rounded">
            <FaInstagram className="text-white text-lg" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm mt-2">
          <span className="font-semibold">@2024 Prashanth Battala</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
