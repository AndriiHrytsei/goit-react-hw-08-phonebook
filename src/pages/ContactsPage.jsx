import React, { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from 'redux/contacts/contactsSlice';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(searchByName(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderLoadingOrError = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return <ContactList />;
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <SearchFilter searchChange={e => setFilter(e.currentTarget.value)} />
      {renderLoadingOrError()}
    </>
  );
}
