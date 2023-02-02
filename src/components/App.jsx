import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Box } from './Box';
import { getContacts } from 'redux/selectors';
// import useLocalStorage from '../huks/useLocalStorage';

export function App() {
  const contacts = useSelector(getContacts);

  // const values = Object.values(contacts);
  // const idx = values.length - 1;
  // values.splice(idx, 1);

  // console.log(values);

  return (
    <Box px={20} pt={10}>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length !== 0 && (
        <Box mt={20}>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      )}
      <ToastContainer />
    </Box>
  );
}
