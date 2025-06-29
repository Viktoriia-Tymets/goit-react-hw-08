import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        actions.resetForm();
      })
      .catch((error) => {
        toast.error(`Login failed: ${error}`);
        actions.resetForm();
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
