import React, { Component } from 'react';
import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';

const LS_KEY = 'contacts-list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  };

  componentDidUpdate = (_, prevState) => {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  };

  onSubmitForm = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  onDeleteContact = contactId => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(({ id }) => id !== contactId);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Block>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
        <GlobalStyles />
      </Block>
    );
  }
}