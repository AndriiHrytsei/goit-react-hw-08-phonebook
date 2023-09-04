import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Notify } from 'notiflix';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const existingName = contacts.some(
      contact => contact.name === form.elements.name.value
    );
    const existingPhone = contacts.some(
      contact => contact.phone === form.elements.phone.value
    );

    if (existingName || existingPhone) {
      Notify.failure('Contact already exists');
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          phone: form.elements.phone.value,
        })
      );
    }
  }

  return (
    <form className={css.contactForm} onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
