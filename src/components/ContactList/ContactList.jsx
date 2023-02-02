import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contactsList, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactsList.map(contact => (
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
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
