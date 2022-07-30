import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/account";

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  }

  const authLinks = (
    <>
      <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      <li>
          <a onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link href="/account/register">
          <a>Register</a>
        </Link>
      </li>
      <li>
        <Link href="/account/login">
          <a>Login</a>
        </Link>
      </li>
    </>
  );

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

          {isLoggedIn ? authLinks : guestLinks }

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
