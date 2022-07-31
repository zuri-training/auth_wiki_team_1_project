import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/account";
import { PrimaryButton, SecondaryButton } from "./utils/Buttons";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li>
        <Link href="/dashboard">
          <a className={`${router.pathname == "/dashboard" && styles.active}`}>
            Dashboard
          </a>
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
        <SecondaryButton>
          <Link href="/account/login">
            <a>Log In</a>
          </Link>
        </SecondaryButton>
      </li>
      <li>
        <PrimaryButton>
          <Link href="/account/register">
            <a>Sign Up</a>
          </Link>
        </PrimaryButton>
      </li>
    </>
  );

  return (
    <nav className={styles.nav}>
      <h2>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="auth wiki logo"
            width={100}
            height={30}
          />
        </Link>
      </h2>

      <div>
        <ul className={styles.navList}>
          <li>
            <Link href="/about">
              <a className={`${router.pathname == "/about" && styles.active}`}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a className={`${router.pathname == "/faq" && styles.active}`}>
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <Link href="/documentation">
              <a
                className={`${
                  router.pathname == "/documentation" && styles.active
                }`}
              >
                Documentation
              </a>
            </Link>
          </li>
          <li>
            <Link href="/library">
              <a
                className={`${router.pathname == "/library" && styles.active}`}
              >
                Library
              </a>
            </Link>
          </li>

          {isLoggedIn ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
