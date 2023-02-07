import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63c325f9e3abfa59bdb9229d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('fetching contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (payload, thunkAPI) => {
    try {
      await axios.post('/contacts', payload);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);
