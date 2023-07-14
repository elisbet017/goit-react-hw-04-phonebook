import { useEffect, useState } from 'react';
import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';

const LS_KEY = 'contacts-list';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) {
      setContacts(() => {
        return JSON.parse(savedContacts);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = contact => {
    setContacts(prev => [...prev, contact]);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const onDeleteContact = contactId => {
    const updatedContacts = contacts.filter(({ id }) => id !== contactId);
    setContacts(updatedContacts);
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Block>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
      <GlobalStyles />
    </Block>
  );
};
