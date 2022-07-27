import styles from "../styles/Footer.module.css";

const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>Copyright | {getDate}</span>
      <p>Auth Wiki Team One</p>
    </footer>
  );
};

export default Footer;
