import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { logout } from "../actions/account";
import { PrimaryButton, SecondaryButton } from "./utils/Buttons";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  const handleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li>
        <a onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <SecondaryButton>
          <Link href="/account/auth">
            <a onClick={() => setShowMenu(false)}>Log In</a>
          </Link>
        </SecondaryButton>
      </li>
      <li>
        <PrimaryButton>
          <Link href="/account/auth">
            <a onClick={() => setShowMenu(false)}>Sign Up</a>
          </Link>
        </PrimaryButton>
      </li>
    </>
  );

  return (
    <nav className={`container ${styles.nav}`}>
      <Link href="/">
        <a>
          <Image
            src="/assets/logo.svg"
            alt="auth wiki logo"
            width={100}
            height={30}
          />
        </a>
      </Link>

      <div
        className={
          showMenu
            ? `${styles.nav_wrapper} ${styles.active}`
            : `${styles.nav_wrapper}`
        }
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/about">
              <a
                className={`${router.pathname == "/about" && styles.active}`}
                onClick={() => setShowMenu(false)}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a
                className={`${router.pathname == "/faq" && styles.active}`}
                onClick={() => setShowMenu(false)}
              >
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
                onClick={() => setShowMenu(false)}
              >
                Documentation
              </a>
            </Link>
          </li>
          <li>
            <Link href="/library">
              <a
                className={`${router.pathname == "/library" && styles.active}`}
                onClick={() => setShowMenu(false)}
              >
                Library
              </a>
            </Link>
          </li>

          {isLoggedIn ? authLinks : guestLinks}
        </ul>
      </div>
      <div className={styles.menu_wrapper} onClick={handleShowMenu}>
        {showMenu ? <GrClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
