import PropTypes from "prop-types";

function ContactListItem({ name, number, id, deleteContact }) {
  return(
    <li className="listItem">
        <p className="contactItem">{name}: {number}</p>
        <button type="button" onClick={() => deleteContact(id)} className="deleteBtn">delete</button>
    </li>
  )   
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func
};

export default ContactListItem;