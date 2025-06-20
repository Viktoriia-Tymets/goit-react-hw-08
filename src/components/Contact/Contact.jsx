import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    closeModal();
  };

  return (
    <div className={css.contact}>
      <p className={css.contactInfo}>
        {contact.name}: {contact.phone}
      </p>
      <button className={css.deleteButton} onClick={openModal}>
        Delete
      </button>

      <ConfirmModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete this contact "${contact.name}"?`}
      />
    </div>
  );
}
