import { translations } from "../Contexts/languageContext";

const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj) || path;
  };
  
  export const translate = (language, key, highlightClass = null) => {
    const text = getNestedValue(translations[language], key);
  
    if (!highlightClass || !text.includes(' ')) return text;
  
    const [firstWord, secondWord, ...rest] = text.split(' ');
    return (
      <>
      <span style={{ whiteSpace: 'nowrap' }}>{firstWord} <span className={highlightClass}>{secondWord}</span></span>{' '}
      {rest.join(' ')}
      </>
    );
  };