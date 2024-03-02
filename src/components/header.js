// Header.js
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import NepaliDate from 'nepali-date-converter';

const Header = ({ lang }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    if (lang === 'नेपा') {
      const nepaliDate = new NepaliDate(date);
      return `${nepaliDate.format("MMMM")} ${nepaliDate.getDate()}, ${nepaliDate.getYear()}`;
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };

  return (
    <div>
      <div className="mr-1 text-lg font-normal">{formatDate(currentDate)}</div>
    </div>
  );
}

export default Header;