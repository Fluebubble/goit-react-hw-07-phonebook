import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  // deleteContact,
  selectContacts,
  selectError,
  selectLoadingStatus,
} from 'redux/selectors';
import { selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter).toLowerCase();
  const visibleContacts = () => {
    if (filter.trim().length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  };
  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch]);

  console.log(contacts);
  return (
    <>
      <ul>
        {error && <p>{error}</p>}
        {isLoading && <p>Contacts are loading</p>}
        {contacts &&
          visibleContacts().map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.phone}{' '}
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
