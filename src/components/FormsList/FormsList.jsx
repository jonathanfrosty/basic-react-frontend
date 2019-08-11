import React, { useState } from 'react';
import Form from '../Form/Form';
import './formsList.scss';

export default function FormsList({ forms, onChange, onComplete }) {
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const handleBack = () => {
    setActiveFormIndex(activeFormIndex - 1);
  };

  const handleContinue = isFinalForm => {
    if (isFinalForm) onComplete();
    else setActiveFormIndex(activeFormIndex + 1);
  };

  return (
    <div className='forms-wrapper'>
      {forms.map((form, index) => {
        const formIndexData = {
          index,
          activeFormIndex,
          finalIndex: forms.length - 1
        };

        return (
          <Form
            key={index}
            formIndexData={formIndexData}
            form={form}
            onChange={e => onChange(e, activeFormIndex)}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      })}
    </div>
  );
}
