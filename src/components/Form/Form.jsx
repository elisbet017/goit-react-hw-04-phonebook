import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Field, Input, SubmitButton } from './Form.styled';

const ContactForm = ({onSubmit, contacts}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputValue = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = e => {
    const isExisted = contacts.find(contact => contact.name === name);
    e.preventDefault();
    reset();
    if (isExisted) {
      return Notify.warning(`${name} is already in contacts`);
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    onSubmit(contact);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputValue}
        />
      </Field>
      <Field>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputValue}
        />
      </Field>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};


export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
