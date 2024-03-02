// App.js
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import React, { useState, useEffect} from 'react'
import { format } from 'date-fns';
function App() {
  const [language, setLanguage] = useState('en');

  const formatDate = (date) => {
    // Add logic to format the date based on the selected language
    // For simplicity, let's assume 'en' for English and 'ne' for Nepali
    if (language === 'ne') {
      // You should implement the Nepali date formatting logic here
      // For now, just return the English format
      return format(date, 'MMM d, yyyy');
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };

  return (
    <div>
     <div>
      <Header language={language} />
      <Nav setLanguage={setLanguage} />
    </div>
    </div>
  );
}

export default App;
