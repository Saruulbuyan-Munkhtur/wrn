// Button.tsx

import React from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  variant = 'primary',
  onClick,
  className
}) => {
  // Define class names for different button variants using Tailwind CSS
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-black'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
