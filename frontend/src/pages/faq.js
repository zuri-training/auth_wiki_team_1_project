import Image from "next/image";
import styles from "../styles/Faq.module.css";
import { PrimaryButton } from "../components/utils/Buttons";
import faqData from "../data/faqdata";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      {/* faq heading */}
      <div className={styles.faq_heading}>
        <h2>Frequently Asked Questions</h2>
        <span>Have any questions? Find answers here</span>
      </div>

      {/* faq cards */}
      <div className={styles.faq_cards_wrapper}>
        <div className={styles.faq_card}>
          <Image
            src="/assets/video-square.svg"
            alt="message question"
            width={64}
            height={64}
          />
          <h4>Watch Tutorial</h4>
        </div>
        <div className={styles.faq_card}>
          <Image
            src="/assets/message-question.svg"
            alt="message question"
            width={64}
            height={64}
          />
          <h4>Get Support</h4>
        </div>
      </div>

      {/* faq shape */}
      <div className={styles.faq_bg_shape}>
        <Image
          src="/assets/faq_shape.svg"
          alt="faq curved lines"
          width={1000}
          height={1000}
        />
      </div>

      {/* questions */}
      <div className="container">
        <div className={styles.faq_questions_wrapper}>
          {faqData &&
            faqData.map((question) => (
              <div key={question.id}>
                <h4>{question.question}</h4>
                <p>{question.response}</p>
              </div>
            ))}
        </div>

        {/* faq cta */}
        <div className={styles.faq_cta}>
          <div>
            <h4>Still have questions?</h4>
            <p>
              Can’t find an answer to the questions you are looking for? Please
              get in touch with us
            </p>
          </div>
          <PrimaryButton className={styles.faq_cta_btn}>
            Get in touch
          </PrimaryButton>
        </div>

        {/* faq bg shape */}
        <div className={styles.faq_bg_shape2}>
          <Image
            src="/assets/faq_shape_2.svg"
            alt="faq curved lines"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
