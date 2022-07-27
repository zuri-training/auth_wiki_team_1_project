import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>
        <Link href="/">Logo</Link>
      </h2>

      <div>
        <ul className={styles.navList}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/documentation">
              <a>Documentation</a>
            </Link>
          </li>
          <li>
            <Link href="/library">
              <a>Library</a>
            </Link>
          </li>

          {/* authentication */}
          <li>
            <Link href="/account/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/account/register">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
