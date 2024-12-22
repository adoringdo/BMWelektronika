import { createContext } from 'react';

// Translation data
const translations = {
  en: {
    navbar: {
      projects: 'Projects',
      installation: 'Installation',
      contacts: 'Contacts',
    },
    header: {
      title: 'Engine temperature MOD for BMW cars',
      description:
        'Give BMW owners the ability to see the engine temperature on their dashboard instead of the autopilot.',
    },
    projects: {
      title1: 'Module 1',
      description1:
        'Engine water temperature instead of autopilot mode (with "needle sweep) for E6x, E7x, E9x cars.',
      title2: 'Module 2',
      description2:
        'M3 style engine water temperature for E9x series diesel cars',
      button: "More"
    },
    installation: {
      title: 'Easy installation',
      description:
        'Only 4 wires, E6x, E7x LCI models require a small KOMBI modification',
      button: 'Wire connection',
    },
    contacts: {
      title: 'Interested? Write to us:',
      'contact us': 'Contact us:',
      or: 'o r',
    },
  },
  lt: {
    navbar: {
      projects: 'Projektai',
      installation: 'Įdiegimas',
      contacts: 'Kontaktai',
    },
    header: {
      title: 'Variklio temperatūros modifikacija BMW automobiliams',
      description:
        'Suteikiam BMW turėtojams galimybę, matyti variklio temperatūrą savo skydelyje vietoj autopiloto.',
    },
    projects: {
      title1: 'Modulis 1',
      description1:
        'Variklio vandens temperatūros vietoj autopiloto modas (su "needle sweep) E6x, E7x, E9x automobiliams.',
      title2: 'Modulis 2',
      description2:
        'M3 stiliaus variklio vandens temperatūra E9x serijos dyzeliniams automobiliams',
      button: 'Daugiau'
    },
    installation: {
      title: 'Lengva instaliacija',
      description:
        'Tik 4 laidai, E6x, E7x LCI modeliams reikalinga nedidelė KOMBI modifikacija',
      button: 'Laidų pajungimas',
    },
    contacts: {
      title: 'Domina? Parašykite mums:',
      'contact us': 'Susisiekite su mumis:',
      or: 'a r b a',
    },
  },
};

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) || path;
};

export const translate = (language, key) => {
  return getNestedValue(translations[language], key);
};

export const LanguageContext = createContext();
