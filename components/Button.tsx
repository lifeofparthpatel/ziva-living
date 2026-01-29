import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';

  const variantStyles = {
    primary: 'bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-600 focus:ring-offset-gray-100',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-gray-100',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500 focus:ring-offset-gray-100',
    ghost: 'text-purple-600 hover:bg-purple-50 focus:ring-purple-500 focus:ring-offset-gray-100',
  };

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};