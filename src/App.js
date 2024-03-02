// App.js
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import React, { useState, useEffect} from 'react'
import { format } from 'date-fns';
function App() {
  const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  const [lang, setLanguage] = useState(storedLanguage);


  const storedTimeFormat = localStorage.getItem('selectedTimeFormat') || 'en';
  const [timeFormat, setTimeFormat] = useState(storedTimeFormat);

  const formatDate = (date) => {
    if (timeFormat === 'नेपा') {
      // Implement Nepali date formatting logic here
      // For now, just return the English format
      return format(date, 'MMM d, yyyy');
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };


  useEffect(() => {
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('selectedTimeFormat', timeFormat);
  }, [lang, timeFormat]);


 return (
    <div>
      <Header lang={lang} timeFormat={timeFormat} />
      <Nav setLanguage={setLanguage} setTimeFormat={setTimeFormat} />
    </div>
  );
}


export default App;
