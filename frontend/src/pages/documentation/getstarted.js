import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../../components/Layouts/AppLayout";

import styles from "../../styles/GetStarted.module.css";

const GetStarted = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <main className={styles.main}>
        <section>
          <ul className="navigation">
            <li>
              <Link href="/documentation/getstarted">
                <a
                  className={
                    `${router.route === "/documentation/getStarted"}`
                      ? `${styles.active} ${styles.nav_list}`
                      : `${styles.nav_list}`
                  }
                >
                  Get Started
                </a>
              </Link>
            </li>
            <li>
              <Link href="/documentation/code">
                <a className="nav-list">Codes Implementation</a>
              </Link>
            </li>
            <li>
              <Link href="/documentation/community">
                <a className="nav-list">Community</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <Image
              src="/assets/rafiki.svg"
              alt="coding workshop"
              width={800}
              height={935}
            />
          </div>
          <div>
            <p>
              AuthWiki is a user-friendly platform that provides developers with
              a library of authentication code samples. Non-registered users can
              glance through code samples, but registered users have full access
              to view, download and comment on code samples.
            </p>
            <p>
              Our library provides you with a handful of secure and flexible
              code samples that span across a range of languages, helping you
              save time and cost of developing your own authentication codes
              from scratch.
            </p>
            <p>
              Browse through our{" "}
              <span className={styles.getStarted_link}>
                <Link href="/library">
                  <a>library</a>
                </Link>{" "}
              </span>
              to select an authentication service that works for you.
            </p>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};
export default GetStarted;
