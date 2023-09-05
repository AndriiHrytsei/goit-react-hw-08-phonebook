export const getContacts = state => state.contacts.contacts.items;

export const getFilteredContacts = state => state.contacts.filteredContacts;

export const getIsLoading = state => state.contacts.contacts.isLoading;

export const getError = state => state.contacts.contacts.error;
