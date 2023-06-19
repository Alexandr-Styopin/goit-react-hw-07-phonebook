import Form from './form/AddForm';
import Contacts from './Contacts/Contacts';
import css from './App.module.css';
import { useEffect } from 'react';
import { getContctsThunk } from '../redux/Thunks';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContctsThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <Contacts />
    </div>
  );
}
