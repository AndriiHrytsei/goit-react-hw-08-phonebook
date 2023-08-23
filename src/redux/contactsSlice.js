import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
// import { Notify } from 'notiflix';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filteredContacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const existingName = state.filteredContacts.some(
          contact => contact.name === payload.name
        );
        const existingNumber = state.filteredContacts.some(
          contact => contact.number === payload.number
        );
        if (existingName || existingNumber) {
          Notify.failure('Contact already exists');
        } else {
          state.filteredContacts.unshift(payload);
          state.contacts.unshift(payload);
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.name !== action.payload);
      state.filteredContacts = state.filteredContacts.filter(contact => contact.name !== action.payload);
    },
    searchByName(state, action) {
      const filteredContacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (action.payload.length > 0) {
        state.filteredContacts = filteredContacts;
      } else {
        state.filteredContacts = [...state.contacts];
      }
    },
  },
});

export const { addContact, deleteContact, searchByName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
