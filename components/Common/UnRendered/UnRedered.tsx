import React from 'react';

type Props = {
  componentName: string;
};

const UnRendered: React.FC<Props> = ({ componentName }) => {
  return (
    <div className={'text-center py-1'}>
      The component {componentName} has not been created yet.
    </div>
  );
};

export default UnRendered;
