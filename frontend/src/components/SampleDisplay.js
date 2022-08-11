import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/SampleCodeDisplay.module.css";
import { PrimaryButton } from "../components/utils/Buttons";
import Modal from "./Modal";

const SampleDisplay = ({ sample }) => {
  const { title, date, description, downloads, likes, comments, id } = sample;

  const [modalShow, setModalShow] = useState(false);

  const router = useRouter();

  let user = "authenticated";

  function handleViewMore() {
    if (user !== "authenticated") {
      setModalShow(true);
    } else {
      router.push(`/library/:${id}`);
    }
  }

  function closeModal() {
    setModalShow(false);
  }

  function sendToSignIn() {
    router.push("/account/login");
  }
  return (
    <div className={styles.sampleDisplay_wrapper}>
      <div className={styles.sampleDisplay_top}>
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className={styles.sampleDisplay_actions}>
        <div className={styles.sampleDisplay_reactions}>
          <div className={styles.sampleDisplay_reaction}>
            <Image
              src="/assets/downloads.svg"
              alt="authwiki downloads"
              height={22}
              width={22}
            />
            <span>{downloads}</span>
          </div>
          <div className={styles.sampleDisplay_reaction}>
            <Image
              src="/assets/comments.svg"
              alt="authwiki comments"
              height={22}
              width={22}
            />
            <span>{comments}</span>
          </div>
          <div className={styles.sampleDisplay_reaction}>
            <Image
              src="/assets/like.svg"
              alt="authwiki likes"
              height={22}
              width={22}
            />
            <span>{likes}</span>
          </div>
        </div>

        <PrimaryButton
          className={styles.sampleDisplay_btn}
          onClick={handleViewMore}
        >
          View More
        </PrimaryButton>

        {/* create Modal pop up */}
        <Modal show={modalShow} onClose={closeModal} onSignIn={sendToSignIn} />
      </div>
    </div>
  );
};

export default SampleDisplay;
