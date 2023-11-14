// components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add any additional props you need
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  // Define Tailwind CSS classes based on the variant
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-gray-900 hover:bg-gray-850 text-white';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md focus:outline-none p-5 m-2 ${getVariantClass()}`}
      {...props}
    />
  );
};

export default Button;
