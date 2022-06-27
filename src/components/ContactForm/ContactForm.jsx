import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  };

  addContact = () => {
    this.props.onClick(this.state.name, this.state.number);
    this.setState({ 
        name: '',
        number: ''
    });

  };

  render() {
    return (
        <div className='contactForm'>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
            <h3>Number</h3>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.addContact}>add contact</button>
        </div>
    );
  }
}

export default ContactForm;


