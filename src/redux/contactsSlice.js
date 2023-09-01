import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filteredContacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    searchByName(state, action) {
      const filteredContacts = state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (action.payload.length > 0) {
        state.filteredContacts = filteredContacts;
      } else {
        state.filteredContacts = [...state.contacts.items];
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.filteredContacts = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.unshift(action.payload);
      state.filteredContacts.unshift(action.payload);
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
      state.filteredContacts = state.filteredContacts.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { searchByName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
