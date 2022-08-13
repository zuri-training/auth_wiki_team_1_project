import AuthLayout from "../components/Layouts/AuthLayout";

import styles from "../styles/Terms.module.css";

import { MdCancel } from "react-icons/md";

const Terms = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h4>TERMS & CONDITIONS</h4>
              <p>General site usage</p>
              <p>Last Revised: July 30, 2022</p>
              <div className="cancel">
                <MdCancel size={40} color="#4E00CE" />
              </div>
            </div>

            <div>
              <p>
                Welcome to AuthWiki. This site is provided as a service to our
                visitors and is used for informational purposes and also a
                library for our visitors. The terms and conditions contain legal
                obligations, please read them carefully and fully understand
                them
              </p>
            </div>

            <div>
              <h5>Your Agreement</h5>
              <p>
                These are the terms and conditions governing the use of this
                service and the agreement that operates between You and the
                company. These terms and conditions set out the rights and
                obligations of all users regarding the use of the service.
                <p>
                  These website standard terms and conditions written on this
                  webpage shall manage your use of our website accessibility.
                </p>
                <p>
                  These terms will be applied fully and affect your use of this
                  website.
                </p>
                <p>
                  By using this website you’ve agreed to accept all terms and
                  conditions written in here. Your access to and use of the
                  service is conditional on your acceptance of and complince
                  with theese terms and conditions. These terms and conditions
                  apply to all visitors, users and others who access or use the
                  service.
                </p>
                <p>
                  By accessing or using the service you agree to be bound by
                  these terms and conditions, if you disagree with any part of
                  these terms and condition then you may not access the service.
                  Your access to and use of the service is also conditioned on
                  your acceptance of and compliance with the privacy policy of
                  the company.
                </p>
                <p>
                  Our privacy policy describes our policies and procedures on
                  the collection, use and disclosure of your personal data.
                </p>
                <h4>INTELLECTUAL PROPERTY RIGHT:</h4> Other than the content you
                own , under these terms, company name and/or its licensors own
                all the intellectual property rights and materials contained in
                this website. <h4>PLEASE NOTE:</h4>
                <p>
                  We reserve the right, at our sole discretion to change, modify
                  or otherwise alter these Terms and Conditions at any time,
                  unless otherwise indicated, ammendments will become effective
                  immediately. Please review these Terms and Conditions
                  periodically. Your continued use of the site following the
                  posting of changes and/or modifications will constitute your
                  acceptance of the revised Terms and conditions and the
                  reasonableness of these standards for notice of changes.
                  <p>
                    For your information, this page was last updated as of the
                    date at the top of these Terms and Conditions.
                    reasonableness of these standards for notice of changes.
                  </p>
                </p>
              </p>
            </div>
          </div>

          <div className={styles.modal}>
            <button
              type="submit"
              className={[styles.button, styles.accept].join(" ")}
            >
              ACCEPT
            </button>

            <button
              type="submit"
              className={[styles.button, styles.decline].join(" ")}
            >
              DECLINE
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

// omo iwish you were using tailwind, i wish too

export default Terms;
