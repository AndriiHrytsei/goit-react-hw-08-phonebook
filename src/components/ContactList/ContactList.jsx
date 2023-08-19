import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export default function ContactList({ filterVal, }) {
  const contacts = useSelector(getContacts)
  return (
    <ul className="contactList">
      {contacts
        .filter(contact => {
          return filterVal.toLowerCase() === ''
            ? contact
            : contact.name.toLowerCase().includes(filterVal);
        })
        .map(({ id, name, number }) => {
          return (
            <Contact contactName={name} contactNumber={number} contactId={id} key={id}/>
          );
        })}
    </ul>
  );
}
