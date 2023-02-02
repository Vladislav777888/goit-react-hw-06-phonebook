import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem';
import { Box } from '../Box';

const getVisibleTasks = (contacts, filter) => {
  // const values = Object.values(contacts);
  // const idx = values.length - 1;
  // values.splice(idx, 1);

  if (filter === '') {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  // switch (statusFilter) {
  //   case statusFilters.active:
  //     return tasks.filter(task => !task.completed);
  //   case statusFilters.completed:
  //     return tasks.filter(task => task.completed);
  //   default:
  //     return tasks;
  // }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleTasks(contacts, filter);
  // console.log(visibleComtacts);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   if (filter.length === 0) {
  //     return contacts;
  //   } else {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <Box mt={10} ml={30} as="ul">
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};
