import React from 'react';
import { useIntl } from 'react-intl';

interface IHookProps {}

const Hook: React.FC<IHookProps> = () => {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <div>{f({ id: 'notifications.newNotification' })}</div>
      <div>{f({ id: 'notifications.moreNested.foo' })}</div>
    </>
  );
};
export default Hook;
