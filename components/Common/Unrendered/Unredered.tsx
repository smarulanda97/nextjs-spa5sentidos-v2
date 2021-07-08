import React from 'react';

type UnrenderedProps = {
  componentName: string;
};

const Unrendered: React.FC<UnrenderedProps> = ({ componentName }) => {
  return (
    <div className={'text-center py-1'}>
      The component {componentName} has not been created yet.
    </div>
  );
};

export default Unrendered;
