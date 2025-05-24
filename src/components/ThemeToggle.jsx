import React, { useState, useEffect } from 'react';
import '../styles/Header.css'; // Import the CSS file

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  // Function to apply the theme to the body
  const applyTheme = (chosenTheme) => {
    document.body.setAttribute('data-theme', chosenTheme);
    localStorage.setItem('theme', chosenTheme);
    setTheme(chosenTheme);
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Effect to set initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // You could also check for system preference here if desired
    // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // If no saved theme, apply the default (which is 'dark' from useState)
      // or check system preference
      applyTheme(theme); 
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
