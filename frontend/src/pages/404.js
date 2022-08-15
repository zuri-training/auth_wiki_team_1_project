import styles from "../styles/404.module.css";
import AppLayout from "../components/Layouts/AppLayout";

const NotFound = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className={styles.image}>
          <img src="/assets/amico.svg" alt="404 image" />
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
