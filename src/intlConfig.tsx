import React from 'react';
import { IntlProvider } from 'react-intl';
import messages, { Languages } from './i18n/i18n';
import { flattenMessages } from './utils/common';

export interface IIntlConfigProps {}

export interface IIntlConfigState {
  currentLang: Languages;
}

class IntlConfig extends React.Component<IIntlConfigProps, IIntlConfigState> {
  langs: Languages[] = [Languages.en, Languages.he];

  state = {
    currentLang: Languages.en
  };

  render() {
    return (
      <IntlProvider locale={this.state.currentLang} messages={flattenMessages(messages[this.state.currentLang])}>
        {this.props.children}
        <div>
          {this.langs.map(lang => (
            <button onClick={() => this.setState({ currentLang: lang })}>{lang}</button>
          ))}
        </div>
      </IntlProvider>
    );
  }
}

export default IntlConfig;
