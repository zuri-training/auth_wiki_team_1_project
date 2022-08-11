import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import styles from "../styles/Modal.module.css";

export default function Modal({ show, onClose, onSignIn }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_items}>
          <p className={styles.modal_items_color}>Oopsies!</p>
          <p>In order to view more you need to be signed in</p>
        </div>
        <div className={styles.modal_actions}>
          <button onClick={() => onClose()} className={styles.modal_cancel_btn}>
            Cancel
          </button>
          <button onClick={() => onSignIn()} className={styles.modal_sign_btn}>
            Yes, sign in
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("library-modal")
    );
  } else {
    return null;
  }
}
