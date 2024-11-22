import React, { useState, useEffect } from 'react';
import Button from './Button';

interface HomeProps {
  onSubmit: (locale: string, language: string) => void;
  initialLocale: string;
  initialLanguage: string;
}

export function Form({ onSubmit, initialLocale, initialLanguage }: HomeProps) {
  const [locale, setLocale] = useState(initialLocale);
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    setLocale(initialLocale);
    setLanguage(initialLanguage);
  }, [initialLocale, initialLanguage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(locale, language);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

