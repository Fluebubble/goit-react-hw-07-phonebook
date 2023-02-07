import ContactForm from './ContactForm/ContactForm';
import { SearchContact } from './SearchContact/SearchContact';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <>
      <h2>ContactForm</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <h3>Search by name</h3>
      <SearchContact />
      <ContactList />
    </>
  );
};

export default App;
