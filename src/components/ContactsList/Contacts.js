import s from './Contacts.module.css';

import PropTypes from 'prop-types';

export default function Contacts({ item, clickDelete }) {
  return (
    <ul className={s.list}>
      {item.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            <p>{name}:</p>
            <span className={s.tel}>{number}</span>
            <button
              type="button"
              className={s.button}
              onClick={() => clickDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  clickDelete: PropTypes.func,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
