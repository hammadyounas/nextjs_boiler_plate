import React from 'react';
import SimpleForm from '../molecules/SimpleForm';

const FormOrganism: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h1 className="text-xl mb-4">Form Organism</h1>
      <SimpleForm />
    </div>
  );
};

export default FormOrganism;
