import Modal from "react-modal";
import { useState } from "react";
import styles from "./AgeConfirmModal.module.css";

export default function AgeConfirmModal() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  function confirmAge() {
    setAgeConfirmed(true);
  }
  return (
    <Modal isOpen={!ageConfirmed} className={styles.modal}>
      <div className={styles.content}>
        <p>Чи виповнилося вам 18 років?</p>
        <button onClick={confirmAge}>Так</button>
        <button>Ні</button>
      </div>
    </Modal>
  );
}
