import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleInputChange, value }) => {
  return (
    <div className={css.container}>
      <p className={css.title}>Find contact by name</p>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
