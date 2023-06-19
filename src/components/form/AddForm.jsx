import { useState } from 'react';
import { nanoid } from 'nanoid';

import InputName from './input-name/InpitName';
import InputNumber from './input-number/InputNumer';
import InputButtin from './inbut-button/InputButtin';
import { useSelector, useDispatch } from 'react-redux';
import { addContactsThunk } from '../../redux/Thunks';

import css from '../form/Form.module.css';

export default function Form() {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSumitForm = e => {
    e.preventDefault();
    if (contacts.map(({ name }) => name).includes(name)) {
      alert(`${name} is already in contact`);
      e.target.reset();
      return;
    }
    const newContact = { name: name, phone: phone, id: nanoid() };

    dispatch(addContactsThunk(newContact));
    e.target.reset();
  };

  return (
    <form
      className={css.submitForm}
      onSubmit={handleSumitForm}
      onChange={handleInputChange}
    >
      <InputName />
      <InputNumber />
      <InputButtin />
    </form>
  );
}
