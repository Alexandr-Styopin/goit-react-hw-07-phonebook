import axios from 'axios';

axios.defaults.baseURL = 'https://647ba35cd2e5b6101db17e5d.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async newContact => {
  await axios.post(`/contacts`, {
    name: newContact.name,
    phone: newContact.number,
  });
  return newContact;
};

export const deleteContacts = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.id;
};
