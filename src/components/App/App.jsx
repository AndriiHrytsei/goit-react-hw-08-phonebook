import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';

// export default class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
//   }

//   handleFormSubmit = (data) => {
//     const { contacts } = this.state
//     const existingContact = contacts.some(contact => contact.name === data.name)
//     const existingNumber = contacts.some(contact => contact.number === data.number)
//     if (existingContact || existingNumber){
//       Notify.failure("Contact already exists")
//     } else {
//       this.setState(prevState => ({
//         contacts: [{id: nanoid(), name: data.name, number: data.number}, ...prevState.contacts]
//       }))
//     }
//   }

//   handleSearchChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value.toLowerCase(),
//     })
//   }
//   handleDeleteContact = (contactId) => {
//     const {contacts} = this.state
//     this.setState({
//       contacts: contacts.filter((contact) =>  contact.id !== contactId)
//     })
//   }
//   render() {
//     const { contacts, filter } = this.state
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onFormSubmit={this.handleFormSubmit}/>
//         <h1>Contacts</h1>
//         <SearchFilter searchChange={this.handleSearchChange}/>
//         <ContactList items={contacts} filterVal={filter} deleteContact={this.handleDeleteContact}/>
//       </div>
//     )
//   }
// }

export default function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  function handleFormSubmit(data) {
    const existingContact = contacts.some(contact => contact.name === data.name)
    const existingNumber = contacts.some(contact => contact.number === data.number)   
    if (existingNumber || existingContact) {
      Notify.failure("Contact already exists")     
    } else {
      setContacts(contacts => [{id: nanoid(), name: data.name, number: data.number}, ...contacts])
    }
  }

  function handleSearchChange (data) {
    setFilter(data)
  }

  function handleDeleteContact(contactID) {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactID))
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={() => handleFormSubmit}/>
      <h1>Contacts</h1>
      <SearchFilter searchChange={handleSearchChange}/>
      <ContactList items={contacts} filterVal={filter} deleteContact={handleDeleteContact}/>
    </>
  )
}