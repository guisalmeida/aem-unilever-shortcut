import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form } from './components/Form';

export function App() {
  const [locale, setLocale] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    // Load saved data from Chrome storage
    if (chrome && chrome.storage) {
      chrome.storage.sync.get(['locale', 'language'], (result) => {
        if (result.locale) setLocale(result.locale);
        if (result.language) setLanguage(result.language);
      });
    }
  }, []);

  const handleFormSubmit = (newLocale: string, newLanguage: string) => {
    setLocale(newLocale);
    setLanguage(newLanguage);
    // Save data to Chrome storage
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ locale: newLocale, language: newLanguage }, () => {
        console.log('Data saved');
      });
    } else {
      console.log('Chrome storage is not available. Data:', { locale: newLocale, language: newLanguage });
    }
  };

  return (
    <Router>
      <div className="w-80 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">AEM Shortcut</h2>
        <nav className="mb-4">
          <ul className="flex space-x-2">
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/sites.html/content/dove/${locale}/${language}/home`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/mnt/overlay/unilever/authoring/configurations/content/configuration/properties.html?item=%2Fconf%2Fdove%2F${locale}%2F${language}%2Fsettings%2Fcloudconfigs%2Fconfiguration`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Configuration
              </Link>
            </li>
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/mnt/overlay/unilever/authoring/configurations/content/configuration/properties.html?item=%2Fconf%2Fdove%2F${locale}%2F${language}%2Fsettings%2Fcloudconfigs%2Fimageoptimization`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Renditions
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Form onSubmit={handleFormSubmit} initialLocale={locale} initialLanguage={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

