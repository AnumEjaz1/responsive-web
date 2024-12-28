// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white-600 text-blue py-10 ">
      <div className="container justify-between mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Morent</h1>
            <p className="text-gray-600">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Column 1: About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-600 hover:text-white">How does it work</a></li>
                <li><a href="#featured" className="text-gray-600 hover:text-white">Featured</a></li>
                <li><a href="#partnership" className="text-gray-600 hover:text-white">Partnership</a></li>
                <li><a href="#business-relation" className="text-gray-600 hover:text-white">Business Relation</a></li>
              </ul>
            </div>

            {/* Column 2: Community */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#events" className="text-gray-600 hover:text-white">Events</a></li>
                <li><a href="#blog" className="text-gray-600 hover:text-white">Blog</a></li>
                <li><a href="#podcast" className="text-gray-600 hover:text-white">Podcast</a></li>
                <li><a href="#invite" className="text-gray-600 hover:text-white">Invite a friend</a></li>
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h3 className="text-lg- font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#discord" className="text-gray-600 hover:text-white">Discord</a></li>
                <li><a href="#instagram" className="text-gray-600 hover:text-white">Instagram</a></li>
                <li><a href="#twitter" className="text-gray-600 hover:text-white">Twitter</a></li>
                <li><a href="#facebook" className="text-gray-600 hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center">
          {/* Left Subsection */}
          <p className="text-sm text-gray-800 text-center lg:text-left">
            &copy; 2022 Morent. All rights reserved.
          </p>

          {/* Right Subsection */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#privacy" className="text-sm text-gray-800 hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-800 hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;