import React, { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../redux/contactsSlice';
import { getIsLoading, getError } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

export default function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(searchByName(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <SearchFilter searchChange={e => setFilter(e.currentTarget.value)} />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </>
  );
}
