import { ILanguage } from '../i18n';

const en: ILanguage = {
  simple: 'Hello world',
  name: 'israel',
  notifications: {
    newNotification: 'You have new notification',
    moreNested: { foo: 'foo' }
  }
};

export default en;
