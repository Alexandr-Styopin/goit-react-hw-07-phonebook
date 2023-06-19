import { createSlice } from '@reduxjs/toolkit';
import {
  getContctsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './Thunks';
import { initialState } from '../redux/initial';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  console.log('handleFulfilled', payload);
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const handleAdd = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = [...state.contacts.items, payload];
};

const handleDelete = (state, { payload }) => {
  state.contacts.isLoading = false;
  console.log('handleDelete', payload);
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== payload
  );
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,

  reducers: {
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContctsThunk.pending, handlePending)
      .addCase(getContctsThunk.fulfilled, handleFulfilled)
      .addCase(getContctsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleDelete)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleAdd)
      .addCase(addContactsThunk.rejected, handleRejected);
  },
});

export const { filterContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
