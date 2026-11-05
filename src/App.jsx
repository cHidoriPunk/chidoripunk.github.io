import React, { useState, useEffect } from 'react';
import './App.scss';
import infoRowsData from './data/info-rows.json';
import experienceRowsData from './data/experience-rows.json';
import educationRowsData from './data/education-rows.json';
import skillsRowsData from './data/skills-rows.json';
import NeoBrutalistView from './components/NeoBrutalistView';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('cv_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    } else {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    }
  }, [isDark]);

  const handleToggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('cv_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-root">
      <NeoBrutalistView
        infoRows={infoRowsData}
        experienceRows={experienceRowsData}
        educationRows={educationRowsData}
        skillsRows={skillsRowsData}
        isDark={isDark}
        onToggleDark={handleToggleDark}
        onPrint={handlePrint}
      />
    </div>
  );
}

export default App;
