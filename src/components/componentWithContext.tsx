import React from 'react';
import { injectIntl, IntlShape } from 'react-intl';

export interface IComponentWithContextProps {
  intl: IntlShape;
}

export interface IComponentWithContextState {}

class ComponentWithContext extends React.Component<IComponentWithContextProps, IComponentWithContextState> {
  render() {
    return (
      <>
        <div>{this.props.intl.messages['name']}</div>
        <div>{this.props.intl.formatMessage({ id: 'ndame', defaultMessage: 'opss' })}</div>
      </>
    );
  }
}

export default injectIntl(ComponentWithContext);
