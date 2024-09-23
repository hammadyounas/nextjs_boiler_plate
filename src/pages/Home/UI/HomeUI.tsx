import React from 'react';
import FormOrganism from '../../../components/organisms/FormOrganism';

const HomeUI: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <FormOrganism  />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeUI;
