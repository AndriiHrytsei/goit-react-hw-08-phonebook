import React, { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
  const [filter, setFilter] = useState('');

  // function handleFormSubmit(data) {
  //   const existingContact = contacts.some(
  //     contact => contact.name === data.name
  //   );
  //   const existingNumber = contacts.some(
  //     contact => contact.number === data.number
  //   );
  //   if (existingNumber || existingContact) {
  //     Notify.failure('Contact already exists');
  //   } else {
  //     setContacts(contacts => [
  //       { id: data.id, name: data.name, number: data.number },
  //       ...contacts,
  //     ]);
  //   }
  // }

  // function handleDeleteContact(contactID) {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactID)
  //   );
  // }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h1>Contacts</h1>
      <SearchFilter searchChange={e => setFilter(e.currentTarget.value)} />
      <ContactList
        filterVal={filter}
        // deleteContact={handleDeleteContact}
      />
    </>
  );
}
