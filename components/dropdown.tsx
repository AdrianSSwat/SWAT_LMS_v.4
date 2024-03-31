"use client"
import { useState } from 'react';
import ProfessionalDevelopment from '../app/Professional-Development/page';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center items-center dark:text-gray-100 w-full px-4 py-2 rounded-md shadow-sm bg-transpaent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Category
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="/Word"
              className="block px-4 py-2 text-sm dark:text-gray-200 text-gray-100 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              MS Word
            </Link>
            <Link
              href="/Excel"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              MS Excel
            </Link>
            <Link
              href="/Professional-Development"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              ProfessionalDevelopment
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;