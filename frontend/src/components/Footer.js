import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {/* footer top */}
      <div className={styles.footer_top}>
        <div className={styles.footer_top_info}>
          <Image
            src="/assets/auth_wiki.svg"
            alt="auth wiki logo"
            width={40}
            height={50}
          />
          <div>
            <p>Information</p>
            <ul>
              <li>
                <Link href="/faq">
                  <a>FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/documenation">
                  <a>Documentation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contact */}
        <div className={styles.footer_top_contact}>
          <p>Contact</p>
          <ul className="flex">
            <li>
              <Link href="#">
                <a>
                  <FaTwitter />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FaInstagram />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FaGithub />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* newsletter */}
        <div>
          <p>Never miss a story!</p>
          <p>Subscribe to our newsletter</p>
          <div>
            <form>
              <input type="text" placeholder="email address" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div>
        <div className="line"></div>
        <span className="foooter_bottom_text">
          &copy; Copyright {getDate}, All Rights Reserved - Zuri Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
