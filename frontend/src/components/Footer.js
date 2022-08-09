import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
<<<<<<< HEAD
    <footer className={styles.footerWrapper}>
      {/* footer top */}
      <div className={`container ${styles.footer}`}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_info}>
            <Image
              src="/assets/auth_wiki.svg"
              alt="auth wiki logo"
              width={40}
              height={54}
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
=======
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
>>>>>>> dev-main
      </div>
    </footer>
  );
};

export default Footer;
