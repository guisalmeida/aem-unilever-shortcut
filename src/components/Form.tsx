import React, { useState, useEffect } from 'react';
import Button from './Button';

interface HomeProps {
  onSubmit: (brand: string, locale: string, language: string) => void;
  initialBrand: string;
  initialLocale: string;
  initialLanguage: string;
}

export function Form({ onSubmit, initialBrand, initialLocale, initialLanguage }: HomeProps) {
  const [brand, setBrand] = useState(initialBrand);
  const [locale, setLocale] = useState(initialLocale);
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    setBrand(initialBrand);
    setLocale(initialLocale);
    setLanguage(initialLanguage);
  }, [initialLocale, initialLanguage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(brand, locale, language);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="locale" className="block mb-1">
          Brand:
        </label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <div>
        <label htmlFor="locale" className="block mb-1">
          Locale:
        </label>
        <input
          type="text"
          id="locale"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <div>
        <label htmlFor="language" className="block mb-1">
          Language:
        </label>
        <input
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
      </div>

      <Button
        is="coral-button"
        icon="save"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
}

