import React, { useState } from 'react';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import './formsList.scss';

export default function FormsList({ forms, onChange, onComplete, finalText }) {
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const handleBack = () => {
    setActiveFormIndex(activeFormIndex - 1);
  };

  const handleNext = () => {
    setActiveFormIndex(activeFormIndex + 1);
  };

  return (
    <div className='forms-wrapper'>
      {forms.map((form, index) => {
        const NextButton = ({ canClick }) => {
          if (index === forms.length - 1)
            return (
              <FormButton text={finalText} type='next' onClick={onComplete} canClick={canClick} />
            );
          return (
            <FormButton text='Continue' type='next' onClick={handleNext} canClick={canClick} />
          );
        };

        const BackButton = () => {
          return (
            index !== 0 && (
              <FormButton text='Back' type='back' onClick={handleBack} canClick={() => true} />
            )
          );
        };

        return (
          <Form
            key={index}
            form={form}
            isActive={index === activeFormIndex}
            onChange={e => onChange(e, activeFormIndex)}
            BackButton={BackButton}
            NextButton={NextButton}
          />
        );
      })}
    </div>
  );
}
