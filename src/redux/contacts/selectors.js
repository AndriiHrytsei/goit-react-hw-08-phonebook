export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = state => state.contacts.filteredContacts;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;
