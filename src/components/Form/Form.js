import React, { Component } from 'react';

import s from './Form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmut = e => {
    e.preventDefault();
    const { name } = this.state;
    const { verificateContact, onSubmit } = this.props;
    const isValidate = verificateContact(name);
    this.setState(INITIAL_STATE);
    if (isValidate) return;

    onSubmit(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmut} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className={s.label}>
          Телефон
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>

        <button className={s.button} type="submit"> Add contact</button>
      </form>
    );
  }
}

export default Form;
