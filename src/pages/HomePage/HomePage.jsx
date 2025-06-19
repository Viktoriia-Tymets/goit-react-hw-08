import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <PageTitle>Welcome to Your Phone Book! </PageTitle>
      <h2 className={css.text}>
        Keep your contacts safe and organized in one simple place
      </h2>
      <h2 className={css.invite}>
        Register or Log in to start managing your phone book!
      </h2>
    </div>
  );
}
