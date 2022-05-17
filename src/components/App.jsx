import React, { Component } from 'react';

import Form from './Form';

import Contacts from './ContactsList/Contacts';

import Container from './Container';

import Filter from './Filter';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);
    this.state.contacts && this.setState({ contacts: contactsParse });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevStage => ({
      contacts: [contact, ...prevStage.contacts],
    }));
  };

  verificationContact = name => {
    const { contacts } = this.state;

    const isVerificate = contacts.find(contact => contact.name === name);

    isVerificate && alert(`${name} is already in contacts`);

    return isVerificate;
  };

  deleteContacts = contactsId => {
    this.setState(prevStage => ({
      contacts: prevStage.contacts.filter(({ id }) => id !== contactsId),
    }));
  };

  changeFilter = e => {
    const current = e.currentTarget.value;
    this.setState({ filter: current });
  };

  showContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    console.log(normalizedFilter);
    const visibleContacts = contacts.filter(({ name }) =>
      name.includes(normalizedFilter)
    );

    return visibleContacts;
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          verificateContact={this.verificationContact}
        />
        <h2>Contacts</h2>
        <Filter filterItem={this.state.filter} change={this.changeFilter} />
        <Contacts
          item={this.showContacts()}
          clickDelete={this.deleteContacts}
        />
      </Container>
    );
  }
}

export default App;
