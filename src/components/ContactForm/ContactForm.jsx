/* eslint-disable no-unused-vars */
import { useState } from 'react';
import css from './ContactForm.module.css';
export default function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // function handleNameChange (e) {
  //   setName(e.currentTarget.value)
  // }
  // function handleNumberChange (e) {
  //   setNumber(e.currentTarget.value)
  // }

  function handleFormSubmit() {
    onFormSubmit({ name: name, number: number });
  }

  return (
    <form
      className={css.contactForm}
      onSubmit={(e) => {
        e.preventDefault()
        handleFormSubmit();
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => {
          setName(e.currentTarget.value);
        }}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.currentTarget.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
