import React, { useState } from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';
import Counters from '../Counters/Counters';
import Counter from '../Counter/Counter';
import { Switch, Route } from 'react-router-dom';
import './mainContent.scss';

const initalFormsState = [
  {
    title: { label: 'Title', content: '' },
    firstName: { label: 'First Name', content: '' },
    lastName: { label: 'Last Name', content: '' }
  },
  {
    email: { label: 'Email', content: '' },
    mobileNumber: { label: 'Mobile Number', content: '' },
    occupation: { label: 'Occupation', content: '' }
  },
  {
    country: { label: 'Country of Residence', content: '' },
    county: { label: 'County', content: '' },
    cityOrTown: { label: 'City/Town', content: '' }
  }
];

export default function Page() {
  const generateRandomCost = () => {
    return (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2);
  };

  const [registered, setRegistered] = useState(false);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [formsState, setFormsState] = useState(initalFormsState);
  const [counters, setCounters] = useState([
    { id: 1, cost: generateRandomCost(), value: 0 },
    { id: 2, cost: generateRandomCost(), value: 1 },
    { id: 3, cost: generateRandomCost(), value: 2 }
  ]);

  const handleContinue = index => {
    let emptyField = Object.values(formsState[index]).find(
      value => value.content === ''
    );
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

      return {
        ...formState,
        [e.target.name]: {
          label: formState[e.target.name].label,
          content: e.target.value
        }
      };
    });

    setFormsState(newFormsState);
  };

  const handleRegisterAgain = () => {
    setFormsState(initalFormsState);
    setActiveFormIndex(0);
    setRegistered(false);
  };

  const handleReset = () => {
    const newCounters = counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    setCounters(newCounters);
  };

  const handleAdd = () => {
    const newId =
      counters.length === 0 ? 1 : counters[counters.length - 1].id + 1;
    const newCounters = [
      ...counters,
      { id: newId, cost: generateRandomCost(), value: 0 }
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
        counter.value += change;
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
