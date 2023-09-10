import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className="contactList">
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Contact
            key={id}
            contactName={name}
            contactNumber={phone}
            contactId={id}
          />
        );
      })}
    </ul>
  );
}
