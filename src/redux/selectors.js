import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => {
  return state.filter;
};

export const selectContacts = state => {
  return state.contacts.items;
};

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim().length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  }
);
