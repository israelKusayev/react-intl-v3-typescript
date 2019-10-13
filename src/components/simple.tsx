import React from 'react';
import { FormattedMessage } from 'react-intl';

export interface ISimpleProps {}

export interface ISimpleState {}

class Simple extends React.Component<ISimpleProps, ISimpleState> {
  render() {
    return (
      <div>
        <FormattedMessage id={'simple'}></FormattedMessage>
      </div>
    );
  }
}

export default Simple;
