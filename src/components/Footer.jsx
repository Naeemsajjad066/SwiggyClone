import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 max-h-[400px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Team</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Swiggy Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Help & Support</a></li>
              <li><a href="#" className="hover:text-gray-300">Partner with us</a></li>
              <li><a href="#" className="hover:text-gray-300">Ride with us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Install App</h3>
            <div className="space-y-4">
              <a href="#" className="block ">
                <img src="/images/appstore.jpeg" alt="App Store" className="h-10 rounded-lg" />
              </a>
              <a href="#" className="block">
                <img src="/images/playstore.jpeg" alt="Play Store" className="h-10 rounded-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} Swiggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;