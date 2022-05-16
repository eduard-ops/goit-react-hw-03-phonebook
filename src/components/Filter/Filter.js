import s from './Filter.module.css';

import PropTypes from 'prop-types';

export default function Filter({ filterItem, change }) {
  return (
    <label className={s.label}>
      Find Contacts by name
      <input value={filterItem} onChange={change} />
    </label>
  );
}

Filter.propTypes = {
  filterItem: PropTypes.string,
  caches: PropTypes.func,
};
