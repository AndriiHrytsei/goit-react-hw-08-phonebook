import Contact from 'components/Contact/Contact';

export default function ContactList({ items, filterVal, deleteContact }) {
  return (
    <ul className="contactList">
      {items
        .filter(contact => {
          return filterVal.toLowerCase() === ''
            ? contact
            : contact.name.toLowerCase().includes(filterVal);
        })
        .map(({ id, name, number }) => {
          return (
            <Contact contactName={name} contactNumber={number} contactId={id} deleteContactFunc={deleteContact} />
          );
        })}
    </ul>
  );
}
