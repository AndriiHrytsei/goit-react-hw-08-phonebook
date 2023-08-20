import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
// import { Notify } from 'notiflix';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const existingName = state.some(contact => contact.name === payload.name)
        const existingNumber = state.some(contact => contact.number === payload.number)
        if (existingName || existingNumber) {
          Notify.failure("Contact already exists")
        } else {
          state.push(payload);
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
      const contactIndex = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(contactIndex, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;