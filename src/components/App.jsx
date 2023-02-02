import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import swal from 'sweetalert';
import css from './App.module.css';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;

    const contactData = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name.value)) {
      swal('Oops!', `${name.value} is already in contacts`, 'error');
      return;
    }

    setContacts(prevState => [...prevState, contactData]);
    localStorage.setItem(
      'contacts',
      JSON.stringify([...contacts, contactData])
    );
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(contact => contact.id !== id))
    );
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter handleInputChange={handleFilterChange} value={filter} />
      <ContactList
        contactsList={contacts}
        deleteContact={deleteContact}
        filter={filter}
      />
    </div>
  );
};
