import PropTypes from "prop-types";

function ContactListItem({ name, number, id, deleteContact }) {
  return(
    <li className="listItem">
        <p>{name}: {number}</p>
        <button type="button" onClick={() => deleteContact(id)}>delete</button>
    </li>
  )   
}

export default ContactListItem;