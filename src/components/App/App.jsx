/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: ''
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleAddContact = (e) => {
    e.preventDefault()
    const 
      { name, number, contacts } = this.state,
      existingContact = contacts.some(contact => contact.name === name),
      existingNumber = contacts.some(contact => contact.number === number)
    if (existingContact || existingNumber) {
      Notify.failure("Contact already exists")
    } else {
      this.setState({
        contacts: [{id: nanoid(), name:this.state.name, number:this.state.number}, ...contacts]
      })
    }
  }
  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    })
  }
  handleDeleteContact = (contactId) => {
    const {contacts} = this.state
    this.setState({
      contacts: contacts.filter((contact) =>  contact.id !== contactId)
    })
  }
  render() {
    const { contacts, filter } = this.state
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} inputChange={this.handleInputChange}/>
        <h1>Contacts</h1>
        <SearchFilter searchChange={this.handleSearchChange}/>
        <ContactList items={contacts} filterVal={filter} deleteContact={this.handleDeleteContact}/>
      </div>
    )
  }
}
