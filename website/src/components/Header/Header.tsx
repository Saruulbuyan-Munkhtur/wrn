// Header.tsx

import React from 'react';

interface HeaderProps {
  logo?: string; // URL to the logo image
  links?: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, links = [] }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        {logo ? (
          <img src={logo} alt="News Logo" className="h-12" />
        ) : (
          <h1 className="text-2xl font-bold text-white">NewsSite</h1>
        )}

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
