import { Component } from 'react';
import { nanoid } from 'nanoid'
import initialContacts from "./initialContacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())).length ? 
      alert(`${name} is alrready in contacts`) : 
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onClick={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;