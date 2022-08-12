import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Faq.module.css";
import { PrimaryButton } from "../components/utils/Buttons";
import faqData from "../data/faqdata";
import { useRouter } from "next/router";

const FAQ = () => {
  const [faqs, setFaqs] = useState(faqData);
  const router = useRouter();
  function handleButton() {
    router.push("/support");
  }
  const [searchInput, setSearchInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const filteredFaq = faqs.filter((faq) =>
      faq.question.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );

    setFaqs(filteredFaq);
  };

  useEffect(() => {
    if (searchInput === "") {
      setFaqs(faqData);
    }
  }, [searchInput]);

  return (
    <div className={styles.faq}>
      {/* faq heading */}
      <div className={styles.faq_heading}>
        <h2>Frequently Asked Questions</h2>
        <span>Have any questions? Find answers here</span>
        <form className={styles.faq_heading_form} onSubmit={onSearchSubmit}>
          <Image
            src="/assets/search.svg"
            alt="search faq"
            width={14}
            height={14}
          />
          <input
            type="text"
            placeholder="Search your question"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
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
            faqs.map((question) => (
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
          <PrimaryButton className={styles.faq_cta_btn} onClick={handleButton}>
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
