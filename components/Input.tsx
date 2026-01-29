import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  const baseStyles =
    'block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 placeholder-gray-500 focus:ring-purple-600 focus:border-purple-600 sm:text-sm';

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input id={id} className={`${baseStyles} ${className}`} {...props} />
    </div>
  );
};