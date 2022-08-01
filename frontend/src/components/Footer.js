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
            height={54}
          />
          <div className={styles.footer_company}>
            <p>Company</p>
            <ul>
              <li>
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Legal</a>
                </Link>
              </li>
            </ul>
          </div>
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
          <p>Contact Us</p>
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
        <div className={styles.footer_top_subscribe}>
          <p>Never miss a story!</p>
          <span>Subscribe to our newsletter.</span>
          <div>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div>
        <div className="line">
          <hr></hr>
        </div>
        <span className="foooter_bottom_text">
          &copy; Copyright {getDate}, All Rights Reserved - Zuri Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
