// Nav.js
import React, { useRef, useState, useEffect } from 'react';
import NepaliDate from 'nepali-date-converter';

const Nav = ({ setLanguage }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [language, setNavLanguage] = useState('en'); // Default language is English

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setNavLanguage(language);
    setIsDropdownOpen2(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const formatNepaliDate = (date) => {
    const nepaliDate = new NepaliDate(date);
    return `${nepaliDate.format("MMMM")} ${nepaliDate.getDate()}, ${nepaliDate.getYear()}`;
  };

  return (
    <div>
      <div className='flex items-center mr-2 select-none'>
        <div className='relative flex items-center ml-1 bg-white rounded-md md:mx-auto' ref={dropdownRef}>
          <img
            src={require('../images/dropdown2.jpeg')}
            alt='Dropdownlogo2'
            className='w-8 h-6 p-1 ml-30 '
            onClick={toggleDropdown2}
          />
          {isDropdownOpen2 && (
            <div className='absolute left-0 z-40 bg-white border shadow-md top-full '>
              <a href='#' onClick={() => handleLanguageChange('en')} className='block pr-7 hover:bg-green-800 hover:text-white'>
                EN
              </a>
              <a href='#' onClick={() => handleLanguageChange('ne')} className='block pr-7 hover:bg-green-800 hover:text-white'>
                नेपा
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Display the date based on the selected language */}
      {language === 'ne' ? formatNepaliDate(new Date()) : new Date().toLocaleDateString('en-US')}
    </div>
  );
};

export default Nav