import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contactsList, deleteContact, filter }) => {
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.element}>
          {contact.name}: {contact.number}
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
