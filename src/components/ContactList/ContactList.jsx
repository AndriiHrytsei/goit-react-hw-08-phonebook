import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
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
