import React, { useState } from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';
import Counters from '../Counters/Counters';
import Counter from '../Counter/Counter';
import { Switch, Route } from 'react-router-dom';
import './page.scss';

export default function Page() {
  const generateRandomCost = () => {
    return (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2);
  };

  const [registered, setRegistered] = useState(true);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [formsState, setFormsState] = useState([
    [
      { label: 'Title', content: '' },
      { label: 'First Name', content: '' },
      { label: 'Last Name', content: '' }
    ],
    [
      { label: 'Email', content: '' },
      { label: 'Mobile Number', content: '' },
      { label: 'Occupation', content: '' }
    ],
    [
      { label: 'Country of Residence', content: '' },
      { label: 'County', content: '' },
      { label: 'City/Town', content: '' }
    ]
  ]);
  const [counters, setCounters] = useState([
    { id: 1, cost: generateRandomCost(), quantity: 0 },
    { id: 2, cost: generateRandomCost(), quantity: 1 },
    { id: 3, cost: generateRandomCost(), quantity: 2 }
  ]);

  const handleContinue = index => {
    let emptyField = formsState[index].find(field => field.content === '');
    if (!emptyField) {
      if (index < formsState.length - 1)
        setActiveFormIndex(activeFormIndex + 1);
      else setRegistered(true);
    }
  };

  const handleBack = () => {
    setActiveFormIndex(activeFormIndex - 1);
  };

  const handleChange = (e, index) => {
    const newFormsState = formsState.map((formState, formIndex) => {
      if (index !== formIndex) return formState;

      const form = [...formState];
      const obj = form.find(field => field.label === e.target.name);
      obj.content = e.target.value;
      return form;
    });

    setFormsState(newFormsState);
  };

  const handleRegisterAgain = () => {
    const newFormsState = formsState.map(formState => {
      const form = [...formState];
      const newForm = form.map(field => {
        return { label: field.label, content: '' };
      });
      return newForm;
    });

    setFormsState(newFormsState);
    setActiveFormIndex(0);
    setRegistered(false);
  };

  const handleReset = () => {
    const newCounters = counters.map(counter => {
      counter.quantity = 0;
      return counter;
    });

    setCounters(newCounters);
  };

  const handleAdd = () => {
    const newId =
      counters.length === 0 ? 1 : counters[counters.length - 1].id + 1;
    const newCounters = [
      ...counters,
      { id: newId, cost: generateRandomCost(), quantity: 0 }
    ];

    setCounters(newCounters);
  };

  const handleDelete = id => {
    const newCounters = counters.filter(counter => counter.id !== id);

    setCounters(newCounters);
  };

  const handleQuantityChange = (id, change) => {
    const newCounters = [...counters];
    newCounters.forEach(counter => {
      if (counter.id === id) {
        counter.quantity += change;
        return;
      }
    });

    setCounters(newCounters);
  };

  return (
    <div className='page-wrapper'>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
          path={'/register'}
          render={props => (
            <Register
              {...props}
              registered={registered}
              formsState={formsState}
              activeFormIndex={activeFormIndex}
              onContinue={handleContinue}
              onBack={handleBack}
              onChange={handleChange}
              onRegisterAgain={handleRegisterAgain}
            />
          )}
        />

        <Route
          path={'/shoppingbasket'}
          render={props => (
            <ShoppingBasket
              {...props}
              counters={counters}
              renderItem={counters => (
                <Counters
                  counters={counters}
                  onReset={handleReset}
                  onAdd={handleAdd}
                  renderItem={counter => (
                    <Counter
                      key={counter.id}
                      counter={counter}
                      onDelete={handleDelete}
                      handleQuantityChange={handleQuantityChange}
                    />
                  )}
                />
              )}
            />
          )}
        />
      </Switch>
    </div>
  );
}
