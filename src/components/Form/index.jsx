import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormButtons from '../FormButtons';
import ErrorList from '../ErrorList';
import './form.scss';

export function Form({ title, formFields, buttons, errors, history }) {
  const [form, setForm] = useState(formFields);

  useEffect(() => {
    document.getElementsByTagName('form')[0].firstChild.lastChild.focus();
  }, []);

  const handleChange = e => {
    const newForm = {
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        content: e.target.value
      }
    };

    setForm(newForm);
  };

  const getFormButtons = () =>
    buttons.map(button => ({
      ...button,
      onClick: () => button.onClick(form, history)
    }));

  const isFormIncomplete = () =>
    !!Object.values(form).find(value => value.content === '');

  const getClassName = (key, value) => {
    const content = value.content;
    const type = value.type;

    const errorMatch = errors.find(error => {
      const code = error.code.toLowerCase();
      return code.includes(key) || code.includes(type);
    });

    if (errorMatch) return 'error';

    return content ? 'filled' : '';
  };

  return (
    <>
      <h3 className='title'>{title}</h3>
      <form className='form-wrapper'>
        {Object.entries(form).map(([key, value]) => {
          return (
            <div key={key} className='field-wrapper'>
              <label>{value.label}</label>
              <input
                className={getClassName(key, value)}
                name={key}
                type={value.type}
                value={value.content}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <FormButtons buttons={getFormButtons()} canSubmit={!isFormIncomplete()} />
      </form>
      <ErrorList errors={errors} />
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  formFields: PropTypes.object.isRequired,
  buttons: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors.errorList
});

export default connect(mapStateToProps)(withRouter(Form));
