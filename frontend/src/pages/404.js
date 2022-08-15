import Image from "next/image";
import styles from "../styles/404.module.css";
import AppLayout from "../components/Layouts/AppLayout";

const NotFound = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className={styles.image}>
          <Image
            src="/assets/amico.svg"
            alt="404 image"
            height={767}
            width={900}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
