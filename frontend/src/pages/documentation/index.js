import Image from "next/image";
import { useRouter } from "next/router";
import AppLayout from "../../components/Layouts/AppLayout";

import styles from "../../styles/Documentation.module.css";

const Documentation = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <div className={styles.documentation_header}>
        <h2>AuthWiki Docs</h2>
        <span>Access our documentations right here.</span>
      </div>

      {/* CTAs */}

      <div className={`container ${styles.documentation_actions}`}>
        {/* get started */}
        <div
          className={styles.documentation_item}
          onClick={() => router.push("/documentation/getstarted")}
        >
          <Image
            src="/assets/get_started.svg"
            alt="get started auth wiki docs"
            height={48}
            width={48}
          />
          <div>
            <h4>Get Started</h4>
            <p>Learn the basics of our authentication codes</p>
          </div>
        </div>
        {/* code implementation */}
        <div
          className={styles.documentation_item}
          onClick={() => router.push("/documentation/code")}
        >
          <Image
            src="/assets/code.svg"
            alt="auth wiki docs code implementation"
            height={48}
            width={48}
          />

          <div className={styles.documentation_item_text}>
            <h4>Code Implementation</h4>
            <p>Go through our code implementation processes here</p>
          </div>
        </div>
        {/* community */}
        <div
          className={styles.documentation_item}
          onClick={() => router.push("/documentation/community")}
        >
          <Image
            src="/assets/community.svg"
            alt="auth wiki docs community"
            height={48}
            width={48}
          />

          <div>
            <h4>Community</h4>
            <p>
              Become an active member of our community today and engage with
              other users
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Documentation;
