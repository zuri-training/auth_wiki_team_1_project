import AuthLayout from "../components/Layouts/AuthLayout";
import { useRouter } from "next/router";
import styles from "../styles/Terms.module.css";

import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
const Privacy = () => {
  const router = useRouter();
  const { back } = router;
  return (
    <div className="container">
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h4>PRIVACY POLICY</h4>
            <p>Last updated: August 1, 2022</p>
            <div className="cancel">
              <MdCancel onClick={back} size={40} color="#4E00CE" />
            </div>
          </div>
          <div className={styles.content}>
            <div>
              This privacy policy has been compiled to better serve those who
              are concerned with how their personal information is being used
              online. Please read our privacy policy carefully to get a closer
              understanding of how we collect, use, protect or otherwise handle
              your personal information in accordance with our website.
              <p>
                This privacy policy sets out how AuthWiki collects, uses and
                discloses any personal information that you give us or that we
                collect when we use our website or services. AuthWiki offers a
                platform that allows users download authentication codes for
                their projects and also collaborate on the platform.
              </p>
              <p>
                By using this website or services or by choosing to give us
                personal information, you consent to the Privacy Policy and the
                processing of your personal information. If you do not agree
                with any terms of this Privacy Policy, please exercise the
                choices we describe in this policy, or do not use the services
                and do not give us any personal information.
              </p>
              <p>
                <strong>
                  What personal information do we collect from visitors?
                </strong>
              </p>
              <p>
                When registering on our website , as appropriate, you will be
                asked to enter your name, email address and other details to
                help you with your experience. We do not ask for bank details in
                your registration neither do we ask for it after you.ve
                registered.
              </p>
              <p>
                <strong>When do we collect Information?</strong>
              </p>
              <p>
                We collect information from you when you fill out a form, when
                registering on our website or enter information on our website
                We may use the information we collect from you when you
                register, sign up for our newsletter, surf the website or use
                certain other site features in the following way:
              </p>
              <ul>
                <li>
                  To follow up with them after correspondence(email or phone
                  inquiries)
                </li>
              </ul>
              <p>
                <strong>How do we use your Information?</strong>
              </p>
              We may use the information we collect from you when you register,
              sign up for our newsletter, surf the website or use certain other
              site features in the following way: To follow up with them after
              correspondence(email or phone inquiries)
              <p>
                <strong>How do we protect your Information?</strong>
              </p>
              <p>
                We do not disclose personal information to third parties without
                your consent. We only provide information, we would never ask
                for credit card numbers we do not process any type of
                transactions through our website. Our website is a means of
                information for our clients
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modal}>
          <button
            type="submit"
            className={[styles.button, styles.accept].join(" ")}
            onClick={() => router.push("/library")}
          >
            ACCEPT
          </button>

          <button
            type="submit"
            className={[styles.button, styles.decline].join(" ")}
            onClick={() => router.push("/")}
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
