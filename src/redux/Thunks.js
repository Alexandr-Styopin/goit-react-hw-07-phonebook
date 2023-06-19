import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, deleteContacts, addContact } from './contactsAPI';

export const getContctsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      return await addContact(newContact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      return await deleteContacts(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
