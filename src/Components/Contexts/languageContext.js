import { createContext } from 'react';

// Translation data
export const translations = {
  en: {
    navbar: {
      projects: 'Projects',
      installation: 'Installation',
      contacts: 'Contacts',
    },
    header: {
      title: 'Engine temperature MOD for BMW cars',
      description:
        'We give BMW owners the ability to see the engine water temperature on their dashboard instead of the autopilot.',
    },
    projects: {
      title1: 'Module 1',
      description1:
        'Engine water temperature instead of autopilot mode (with "needle sweep) for E6x, E7x, E9x cars.',
      installTitle1: 'Modification for LCI models',
      installDescription1: 'A KOMBI modification is required for E6x, E7x LCI models',
      title2: 'Module 2',
      description2:
        'M3-Style engine water temperature display for E9x Diesel Cars',
      button: 'Learn more',
    },
    installation: {
      title: 'Easy installation',
      description:
        'Only 4 wires; a small KOMBI modification is required for E6x, E7x LCI models',
      button: 'Wiring diagram',
    },
    contacts: {
      title: 'Interested? Write to us at:',
      'contact us': 'Contact us:',
      or: 'o r',
    },
  },
  lt: {
    navbar: {
      projects: 'Projektai',
      installation: 'Instaliacija',
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
      installTitle1: 'Modifikacija LCI modeliams',
      installDescription1:
        'E6x, E7x LCI modeliams reikalinga KOMBI modifikacija',
      title2: 'Modulis 2',
      description2:
        'M3 stiliaus variklio vandens temperatūra E9x serijos dyzeliniams automobiliams',
      button: 'Plačiau',
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

export const LanguageContext = createContext();
