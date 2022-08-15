import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Community.module.css";
import AppLayout from "../../components/Layouts/AppLayout";

const Community = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <nav></nav>
      <main className={styles.main}>
        <section>
          <ul className="navigation">
            <li>
              <Link href="/documentation/getstarted">
                <a className="active nav-list">Get Started</a>
              </Link>
            </li>
            <li>
              <Link href="/documentation/code">
                <a className="nav-list">Codes Implementation</a>
              </Link>
            </li>
            <li>
              <Link href="/documentation/community">
                <a
                  className={
                    `${router.route === "/documentation/community"}`
                      ? `${styles.active} ${styles.nav_list}`
                      : `${styles.nav_list}`
                  }
                >
                  Community
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <Image
              src="/assets/rafiki.svg"
              alt="group discussion"
              width={800}
              height={900}
            />
          </div>
          <div>
            <p>
              AuthWiki is an online platform for developers to access
              authentication codes, share ideas and establish valuable
              connections.
            </p>
            <p>
              We aim to promote a positive and supportive space for developers
              to interact. To help everyone have the best possible experience,
              please take a look at our community guidelines:
            </p>
            <ul>
              <li>
                - Feel free to post questions and start discussions on any topic
                relating to displayed code samples.
              </li>
              <li>- Be polite and communicate with respect</li>
              <li>- Respect the privacy of other community members</li>
              <li>
                - Contact community managers directly for support{" "}
                <span className={styles.getStarted_link}>
                  <Link href="/support">
                    <a>here</a>
                  </Link>{" "}
                </span>
              </li>
              <li>- Do not share personal or private information</li>
              <li>- Do not post promotional content</li>
              <li>- Do not post explicit, rude or aggressive comments</li>
            </ul>
            <p>
              In the event of a violation, we will take action to protect other
              members of the community. This action might include a warning. In
              the event of repeated violation, the defaulting member will be
              banned from the community.
            </p>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export default Community;
