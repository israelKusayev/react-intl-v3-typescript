import en from './translations/en';
import he from './translations/he';

export enum Languages {
  en = 'en',
  he = 'he'
}

export type ILanguage = {
  simple: string;
  name: string;
  notifications: {
    newNotification: string;
    moreNested: {
      foo: string;
    };
  };
};

export type ILanguagesObject = {
  [language in Languages]: ILanguage;
};

const messages: ILanguagesObject = {
  en: en,
  he: he
};
export default messages;
