import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk, getContctsThunk } from '../../../../redux/Thunks';
import css from '../ContactsItem/ContactsItem.module.css';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContctsThunk());
  }, [dispatch]);

  const handleRemove = () => {
    dispatch(deleteContactsThunk(contact.id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {contact.name}: {contact.phone}
      </p>

      <button className={css.contactBtn} type="button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
}
