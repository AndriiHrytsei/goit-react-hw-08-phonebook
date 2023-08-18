import React from 'react';
import css from "./Contact.module.css"

export default function Contact({contactName, contactNumber, deleteContactFunc, contactId}) {
  return (
    <li className={css.contact} key={contactId}>
      <p>
        {contactName}: {contactNumber}
      </p>
      <button type="button" onClick={() => deleteContactFunc(contactId)}>
        Delete
      </button>
    </li>
  );
}
