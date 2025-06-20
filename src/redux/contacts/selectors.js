import { selectNameFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
      const normalizedFilter = (filterValue || "").toLowerCase();
      return contacts.filter((contact) => {
      const nameMatch =
        typeof contact.name === "string" &&
        contact.name.toLowerCase().includes(normalizedFilter);
      const phoneMatch =
        typeof contact.phone === "string" &&
        contact.phone.toLowerCase().includes(normalizedFilter);

      return nameMatch || phoneMatch;
    });
  }
);