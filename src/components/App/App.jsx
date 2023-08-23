import React, { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/contactsSlice';

export default function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchByName(filter))
  }, [dispatch, filter])
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <SearchFilter searchChange={e => setFilter(e.currentTarget.value)} />
      <ContactList filterVal={filter} />
    </>
  );
}
