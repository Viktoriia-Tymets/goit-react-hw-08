import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ConfirmModal({
  isOpen,
  onRequestClose,
  onConfirm,
  message,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: { maxWidth: "300px", margin: "auto", padding: "20px" },
      }}
    >
      <p>{message}</p>
      <div className={css.buttons}>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onRequestClose}>No</button>
      </div>
    </Modal>
  );
}
