import { useSelector } from 'react-redux';
import ContactsList from './ContactsList/ContactsList';
import FilterInput from './ContactsFilter/FilterInput';

export default function Contacts() {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.filter);

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Contacts</h2>
      <FilterInput />
      <ContactsList filterContact={filterContact()} />
    </div>
  );
}
