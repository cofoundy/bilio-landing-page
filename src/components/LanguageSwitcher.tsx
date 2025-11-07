import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Globe, Check } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    
    // Store language preference
    localStorage.setItem('bilio-language', languageCode);
    
    // Update URL path if needed for SEO
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|es)/, '');
    const newPath = languageCode === 'es' ? pathWithoutLang || '/' : `/${languageCode}${pathWithoutLang}`;
    
    // Only update URL if it's different to avoid unnecessary navigation
    if (newPath !== currentPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-Bilio-gray-700 hover:text-Bilio-yellow hover:bg-Bilio-yellow/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-white border border-Bilio-gray-200 shadow-xl">
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                i18n.language === language.code
                  ? 'bg-Bilio-blue text-white'
                  : 'text-Bilio-gray-700 hover:bg-Bilio-gray-100 hover:text-Bilio-blue'
              }`}
            >
              <span className="mr-3 text-lg">{language.flag}</span>
              <span className="flex-1 text-left">{language.name}</span>
              {i18n.language === language.code && (
                <Check className="h-4 w-4 ml-2" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;