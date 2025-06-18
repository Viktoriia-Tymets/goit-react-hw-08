import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be minimum 3 chars")
    .max(50, "Your name is too long")
    .required("This field is required"),
  number: Yup.string().required("This field is required"),
});

export default function UserForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.group}>
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
