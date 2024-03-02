// Nav.js
import React, { useRef, useState, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'नेपा', label: 'नेपा' },
];

const Nav = ({ setLanguage , setTimeFormat}) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setTimeFormat(lang === 'नेपा' ? 'नेपा' : 'en');
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='flex items-center mr-2 select-none'>
      <div className='relative flex items-center ml-1 bg-white rounded-md md:mx-auto' ref={dropdownRef}>
        <img
          src={require('../images/dropdown2.jpeg')}
          alt='Dropdownlogo2'
          className='w-8 h-6 p-1 ml-30'
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className='absolute left-0 z-40 bg-white border shadow-md top-full'>
            {languages.map((lang) => (
              <a
                key={lang.code}
                href='#'
                onClick={() => handleChangeLanguage(lang.code)}
                className='block pr-7 hover:bg-green-800 hover:text-white'
              >
                {lang.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
