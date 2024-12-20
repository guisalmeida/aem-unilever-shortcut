import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form } from './components/Form';

export function App() {
  const [brand, setBrand] = useState('');
  const [locale, setLocale] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    // Load saved data from Chrome storage
    if (chrome && chrome.storage) {
      chrome.storage.sync.get(['brand', 'locale', 'language'], (result) => {
        if (result.brand) setBrand(result.brand);
        if (result.locale) setLocale(result.locale);
        if (result.language) setLanguage(result.language);
      });
    }
  }, []);

  const handleFormSubmit = (newBrand: string, newLocale: string, newLanguage: string) => {
    setBrand(newBrand);
    setLocale(newLocale);
    setLanguage(newLanguage);
    // Save data to Chrome storage
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ brand: newBrand, locale: newLocale, language: newLanguage }, () => {
        console.log('Data saved');
      });
    } else {
      console.log('Chrome storage is not available. Data:', { brand: newBrand, locale: newLocale, language: newLanguage });
    }
  };

  return (
    <Router>
      <div className="w-80 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">AEM Shortcut</h2>
        <nav is='coral-anchorlist' className="mb-4">
          <ul className="flex space-x-2">
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/sites.html/content/${brand}/${locale}/${language}/home`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
                is="coral-anchorlist-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/mnt/overlay/unilever/authoring/configurations/content/configuration/properties.html?item=%2Fconf%2F${brand}%2F${locale}%2F${language}%2Fsettings%2Fcloudconfigs%2Fconfiguration`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
                is="coral-anchorlist-item"
              >
                Configuration
              </Link>
            </li>
            <li>
              <Link
                to={`https://author-p34054-e123602.adobeaemcloud.com/mnt/overlay/unilever/authoring/configurations/content/configuration/properties.html?item=%2Fconf%2F${brand}%2F${locale}%2F${language}%2Fsettings%2Fcloudconfigs%2Fimageoptimization`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
                is="coral-anchorlist-item"
              >
                Renditions
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Form onSubmit={handleFormSubmit} initialBrand={brand} initialLocale={locale} initialLanguage={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

