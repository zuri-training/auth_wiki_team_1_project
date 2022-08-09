import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_bg_circle}>
        <Image
          src="/assets/footer_frame.svg"
          alt="footer circles"
          width={652}
          height={709}
        />
      </div>
      <div className={`container ${styles.footer}`}>
        {/* logo */}
        <div className={styles.footer_logo}>
          <Image
            src="/assets/auth_wiki.svg"
            alt="auth wiki logo"
            width={40}
            height={54}
          />
          <div>
            <span className={styles.footer_logo_blue}>Auth</span>
            <span className={styles.footer_logo_text}>Wiki</span>
          </div>
        </div>

        {/* organisation col */}
        <div>
          <h4>Organization</h4>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
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
          </ul>
        </div>
        {/* information */}
        <div>
          <h4>Information</h4>
          <ul>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a>Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* support */}
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* line */}
        <div className="line"></div>
        {/* copyright */}
        <div className={styles.footer_copyright}>
          <div>
            <span>&copy; Copyright {getDate}</span>
            <span>All Rights Reserved - The Zuri Team</span>
            <span>The Authwiki Site</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
