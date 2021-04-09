import React, { memo } from 'react';
import { ServicesListItem } from '@components/index';

const ServicesList: React.FC<any> = ({ loading, data = {}, error }) => {
  const { services = [] }: { services?: Array<any> } = data;

  return (
    <div
      className={`row text-sm-left text-center justify-content-center`}
      data-testid={'services-list'}
    >
      {!loading &&
        !error &&
        services.map((service) => (
          <ServicesListItem key={service.id} service={service} />
        ))}
    </div>
  );
};

export default memo(ServicesList);
