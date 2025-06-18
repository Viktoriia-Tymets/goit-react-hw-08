import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        <strong className={css.contactInfo}>{contact.name} : </strong>{" "}
        {contact.number}
      </p>
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}
