import { translations } from '../i18n/translations';

export function t(key: string, lang: string = 'en'): string {
  const keys = key.split('.');
  let result = translations[lang] || translations['en'];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      // Fallback to English if translation is missing
      result = translations['en'];
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = result[fallbackKey];
        } else {
          return key; // Return the key if translation is missing
        }
      }
    }
  }
  
  return result as string;
}