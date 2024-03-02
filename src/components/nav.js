// Nav.js
import React, { useRef, useState, useEffect } from 'react';


const Nav = ({ setLanguage }) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
 
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


    </div>
  );
};

export default Nav