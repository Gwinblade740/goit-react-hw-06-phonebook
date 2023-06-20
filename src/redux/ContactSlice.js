import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    phoneContacts: initialContact,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.phoneContacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.phoneContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.phoneContacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, deleteContact } = contactSlice.actions;
export const ContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
