import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className="contactList">
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            contactName={name}
            contactNumber={number}
            contactId={id}
          />
        );
      })}
    </ul>
  );
}
