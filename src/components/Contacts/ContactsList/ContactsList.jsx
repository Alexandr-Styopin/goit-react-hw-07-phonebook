import ContactsItem from '../ContactsList/ContactsItem/ContactsItem';

export default function ContactsList({ filterContact }) {
  return (
    <ul>
      {filterContact.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
