import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <h2 className={styles.h2}>Про нас</h2>
      <div>
      </div>{" "}
      <div className={styles.container}>
      <img src={require("./img/logo.png")} className={styles.img} />

        <p>
          Ми - команда ентузіастів, що пропагуємо культуру вживання крафтового
          пива. У нашому магазині ви знайдете великий вибір пива з різних
          куточків світу, а також можливість спробувати його на місці в нашому
          затишному закладі.
        </p>
        <p>
          Ми працюємо з найкращими виробниками крафтового пива, щоб завжди мати
          у нашому асортименті нові смаки та сорти.
        </p>
      </div>
    </>
  );
}
