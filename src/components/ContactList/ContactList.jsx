import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList({ contacts, onDelete }) {
  return(
    <ul className="friendsList">
        {contacts.map(contact => (  
            <ContactListItem 
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                deleteContact={onDelete}
            />
        ))}   
    </ul> 
 )   
}

// ContactList.defaultProps = {
//     avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
// };
  
// ContactList.propTypes = {
//   name: PropTypes.string,
//   avatar: PropTypes.string,
//   isOnline: PropTypes.bool,
// };

export default ContactList;