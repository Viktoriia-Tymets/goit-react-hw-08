import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { updateContact } from "../../redux/contacts/operations";

export default function EditContactForm({ contact, onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateContact({ id: contact.id, updatedData: values }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  return (
    <Formik
      initialValues={{ name: contact.name, phone: contact.phone }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name:
          <Field name="name" type="text" />
        </label>
        <label>
          Phone:
          <Field name="phone" type="text" />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
}
